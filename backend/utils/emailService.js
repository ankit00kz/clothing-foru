// backend/utils/emailService.js
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

const sendWelcomeEmail = async (user) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@clothingforu.com',
    to: user.email,
    subject: 'Welcome to Clothing For U!',
    html: `
      <h1>Welcome ${user.firstName}!</h1>
      <p>Thank you for joining Clothing For U.</p>
      <p>Your account has been successfully created with the email: ${user.email}</p>
      <p>Start exploring our exclusive collection and enjoy 10% off on your first purchase!</p>
      <p>Use code: <strong>WELCOME10</strong></p>
      <a href="${process.env.FRONTEND_URL}/shop" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Start Shopping</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to', user.email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const sendOrderConfirmationEmail = async (order, user) => {
  const itemsHTML = order.items.map(item => `
    <tr>
      <td>${item.productName}</td>
      <td>x${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
    </tr>
  `).join('');

  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@clothingforu.com',
    to: user.email,
    subject: `Order Confirmation - Order #${order._id}`,
    html: `
      <h1>Order Confirmed!</h1>
      <p>Hi ${user.firstName},</p>
      <p>Your order has been confirmed and will be processed soon.</p>
      <h2>Order Details:</h2>
      <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
        <tr style="border-bottom: 1px solid #ddd;">
          <th style="padding: 10px; text-align: left;">Product</th>
          <th style="padding: 10px; text-align: left;">Quantity</th>
          <th style="padding: 10px; text-align: left;">Price</th>
        </tr>
        ${itemsHTML}
      </table>
      <h3>Order Summary:</h3>
      <p>Subtotal: $${order.subtotal.toFixed(2)}</p>
      <p>Tax: $${order.tax.toFixed(2)}</p>
      <p>Shipping: ${order.shippingCost === 0 ? 'FREE' : '$' + order.shippingCost.toFixed(2)}</p>
      <p><strong>Total: $${order.totalPrice.toFixed(2)}</strong></p>
      <p>Tracking number will be sent once the order ships.</p>
      <a href="${process.env.FRONTEND_URL}/profile" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Track Order</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent to', user.email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const sendShippingNotificationEmail = async (order, user, trackingNumber) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@clothingforu.com',
    to: user.email,
    subject: `Your Order is Shipped! - Order #${order._id}`,
    html: `
      <h1>Your Order is on the Way!</h1>
      <p>Hi ${user.firstName},</p>
      <p>Great news! Your order has been shipped.</p>
      <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
      <p><strong>Estimated Delivery:</strong> 5-7 business days</p>
      <a href="${process.env.FRONTEND_URL}/profile" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Track Your Order</a>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Shipping notification email sent to', user.email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const sendPasswordResetEmail = async (user, resetToken) => {
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@clothingforu.com',
    to: user.email,
    subject: 'Password Reset Request',
    html: `
      <h1>Password Reset</h1>
      <p>Hi ${user.firstName},</p>
      <p>We received a request to reset your password.</p>
      <p>Click the link below to reset your password (valid for 1 hour):</p>
      <a href="${resetLink}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent to', user.email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendOrderConfirmationEmail,
  sendShippingNotificationEmail,
  sendPasswordResetEmail,
};
