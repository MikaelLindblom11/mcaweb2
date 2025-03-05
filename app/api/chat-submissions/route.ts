import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Format the user information
    const userInfo = data.userInfo || {};
    const messages = data.messages || [];
    
    // Send email notification to your team
    const emailResult = await sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'your-team@example.com',
      subject: 'New Chat Inquiry from Website',
      html: `
        <h1>New Chat Inquiry</h1>
        <p><strong>Name:</strong> ${userInfo.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${userInfo.email || 'Not provided'}</p>
        <p><strong>Company:</strong> ${userInfo.company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${userInfo.service || 'Not provided'}</p>
        <p><strong>Target Market:</strong> ${userInfo.market || 'Not provided'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        
        <h2>Conversation:</h2>
        <ul style="list-style-type: none; padding-left: 0;">
          ${messages.map((msg: any) => `
            <li style="margin-bottom: 10px; padding: 10px; border-radius: 5px; background-color: ${msg.sender === 'user' ? '#f0f0f0' : '#e6f7ff'};">
              <strong>${msg.sender === 'user' ? 'User' : 'Bot'}:</strong> 
              ${msg.content}
              <div style="font-size: 12px; color: #666; margin-top: 5px;">
                ${new Date(msg.timestamp).toLocaleString()}
              </div>
            </li>
          `).join('')}
        </ul>
      `
    });
    
    if (!emailResult.success) {
      console.error('Failed to send email notification:', emailResult.error);
      // Still return success to the client, but log the error
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing chat submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process submission' },
      { status: 500 }
    );
  }
}