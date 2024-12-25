import { Handler } from '@netlify/functions';
import * as sgMail from '@sendgrid/mail';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    
    const data = await response.json();
    console.log('reCAPTCHA verification response:', data);
    return data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

export const handler: Handler = async (event) => {
  console.log('Received request:', event.httpMethod);

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { 
      statusCode: 204, 
      headers,
      body: '' 
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    console.log('Request body:', event.body);
    const { name, email, role, message, token } = JSON.parse(event.body || '{}');

    // Verify required fields
    if (!name || !email || !role || !message || !token) {
      console.error('Missing required fields');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Verify reCAPTCHA
    const isValid = await verifyRecaptcha(token);
    if (!isValid) {
      console.error('Invalid reCAPTCHA');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid reCAPTCHA verification' }),
      };
    }

    // Initialize SendGrid
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is not configured');
    }
    
    sgMail.setApiKey(apiKey);

    // Send email
    const msg = {
      to: 'info@techbeatdaily.com',
      from: 'info@techbeatdaily.com',
      subject: `TechBeat Training Feedback from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Role: ${role}
Message: ${message}
      `,
      html: `
<h3>New Feedback Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Role:</strong> ${role}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    };

    console.log('Sending email...');
    await sgMail.send(msg);
    console.log('Email sent successfully');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Feedback sent successfully' }),
    };
  } catch (error) {
    console.error('Error in feedback function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to send feedback' 
      }),
    };
  }
};