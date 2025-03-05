import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Send notification email to admin
    const emailResult = await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'your-team@example.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h1>New Newsletter Subscription</h1>
        <p>A new user has subscribed to your newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Website Newsletter Popup</p>
        
        <p>You should add this email to your newsletter service provider.</p>
      `
    });
    
    if (!emailResult.success) {
      console.error('Failed to send notification email:', emailResult.error);
      // Still return success to the client, but log the error
    }
    
    // Here you would typically also add the email to your newsletter service
    // like Mailchimp, ConvertKit, etc. using their API
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}