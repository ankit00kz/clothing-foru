# Email Notification System

The email notification system is set up to send transactional emails to users.

## Configured Notifications

### 1. Welcome Email
- Sent when user registers
- Includes: Welcome message, account info, next steps

### 2. Order Confirmation
- Sent immediately after order placement
- Includes: Order details, items, total, tracking link

### 3. Shipping Notification
- Sent when order is shipped
- Includes: Tracking number, estimated delivery date

### 4. Delivery Confirmation
- Sent when order is delivered
- Includes: Delivery confirmation, return policy reminder

### 5. Password Reset
- Sent when user requests password reset
- Includes: Reset link with 1-hour expiry

### 6. Promotional Emails
- Weekly newsletter with new products
- Special offers and discounts
- Personalized recommendations

## Setup Instructions

1. Install nodemailer:
```bash
npm install nodemailer
```

2. Create `.env` variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@clothingforu.com
```

3. Use in controllers:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send email
await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: user.email,
  subject: 'Order Confirmation',
  html: emailTemplate,
});
```

## Email Templates

Create email templates in `/backend/templates/emails/`:
- `welcome.html`
- `order-confirmation.html`
- `shipping-notification.html`
- `delivery-confirmation.html`
- `password-reset.html`
