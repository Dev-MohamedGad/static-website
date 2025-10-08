# EmailJS Setup Instructions

This project uses EmailJS to handle contact form submissions. Follow these steps to set up email functionality:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
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
```

4. Note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
  // ... rest of config
};
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **"Invalid service ID"**: Double-check your Service ID in the EmailJS dashboard
- **"Invalid template ID"**: Verify your Template ID matches exactly
- **"Invalid public key"**: Ensure your Public Key is correct
- **CORS errors**: Make sure your domain is added to EmailJS allowed origins

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in client-side code

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Standard support

For higher limits, consider upgrading to a paid plan.
