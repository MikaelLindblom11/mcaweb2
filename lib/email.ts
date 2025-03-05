import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Configure the email transporter
// For production, you would use your actual SMTP credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  secure: process.env.EMAIL_SERVER_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

// For development/testing, you can use a service like Ethereal
// which provides a fake SMTP service
const createTestAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

export const sendEmail = async (data: EmailPayload) => {
  const emailTransporter = process.env.NODE_ENV === 'production' 
    ? transporter 
    : await createTestAccount();

  try {
    const result = await emailTransporter.sendMail({
      from: process.env.EMAIL_FROM || 'Marketing Collective Asia <noreply@marketingcollective.asia>',
      ...data,
    });

    // If using Ethereal for testing, log the preview URL
    if (process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result));
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};