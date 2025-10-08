// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS service ID
  SERVICE_ID: 'service_shehab_law',
  
  // Replace with your EmailJS template ID
  TEMPLATE_ID: 'template_contact_form',
  
  // Replace with your EmailJS public key
  PUBLIC_KEY: 'your_public_key_here',
  
  // Email template parameters
  TEMPLATE_PARAMS: {
    to_name: 'Shehab Law Firm',
    from_name: '',
    from_email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    urgency: '',
    preferred_contact: '',
    reply_to: ''
  }
};

// EmailJS template example:
/*
Subject: New Contact Form Submission - {{subject}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}
Message: {{message}}
Urgency: {{urgency}}
Preferred Contact: {{preferred_contact}}

Please reply directly to: {{reply_to}}

Best regards,
Website Contact Form
*/
