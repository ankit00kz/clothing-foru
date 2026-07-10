const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    productId: mongoose.Schema.ObjectId,
    productName: String,
    price: Number,
    quantity: Number,
    size: String,
    color: String,
  }],
  shippingAddress: {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    phone: String,
  },
  subtotal: Number,
  tax: Number,
  shippingCost: Number,
  totalPrice: Number,
  paymentMethod: {
    type: String,
    enum: ['stripe', 'paypal', 'cod'],
    default: 'stripe',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
  },
  stripePaymentId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);