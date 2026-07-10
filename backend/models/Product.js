const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a product description'],
  },
  category: {
    type: String,
    required: true,
    enum: ['mens', 'womens', 'kids', 'accessories'],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  finalPrice: Number,
  images: [String],
  sizes: [{
    size: String,
    stock: Number,
  }],
  colors: [String],
  material: String,
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    userId: mongoose.Schema.ObjectId,
    userName: String,
    rating: Number,
    comment: String,
    createdAt: Date,
  }],
  totalStock: Number,
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre('save', function(next) {
  if (this.isModified('price') || this.isModified('discount')) {
    this.finalPrice = this.price - (this.price * this.discount) / 100;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);