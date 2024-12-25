import * as sgMail from '@sendgrid/mail';
import type { FeedbackFormData } from '../../src/lib/feedback/types';

export function initializeSendGrid() {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY is not configured');
  }
  sgMail.setApiKey(apiKey);
}

export async function sendEmail(data: FeedbackFormData) {
  const msg = {
    to: 'info@techbeatdaily.com',
    from: 'info@techbeatdaily.com',
    subject: `TechBeat Training Feedback from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Role: ${data.role}
Message: ${data.message}
    `,
    html: `
<h3>New Feedback Submission</h3>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Role:</strong> ${data.role}</p>
<p><strong>Message:</strong></p>
<p>${data.message}</p>
    `,
  };

  await sgMail.send(msg);
}