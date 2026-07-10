const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');

// ==== USER MANAGEMENT ====

exports.getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const query = search ? { $or: [{ name: new RegExp(search, 'i') }, { email: new RegExp(search, 'i') }] } : {};

    const users = await User.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-password');

    const total = await User.countDocuments(query);

    res.status(200).json({
      success: true,
      data: users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!['customer', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role, updatedAt: new Date() },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'Role updated', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating role', error: error.message });
  }
};

exports.deactivateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: false, updatedAt: new Date() },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'User deactivated', user });
  } catch (error) {
    res.status(500).json({ message: 'Error deactivating user', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

// ==== ORDER MANAGEMENT ====

exports.getAllOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = status ? { status } : {};

    const orders = await Order.find(query)
      .populate('user', 'name email')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Order.countDocuments(query);

    res.status(200).json({
      success: true,
      data: orders,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email phone');
    if (!order) return res.status(404).json({ message: 'Order not found' });

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error: error.message });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const { paymentStatus } = req.body;
    const validPaymentStatuses = ['unpaid', 'paid', 'refunded'];

    if (!validPaymentStatuses.includes(paymentStatus)) {
      return res.status(400).json({ message: 'Invalid payment status' });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { paymentStatus, updatedAt: new Date() },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'Payment status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment', error: error.message });
  }
};

// ==== PRODUCT MANAGEMENT ====

exports.getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const query = category ? { category } : {};

    const products = await Product.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      data: products,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, message: 'Product created', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, message: 'Product updated', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

// ==== DASHBOARD ANALYTICS ====

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();
    const paidOrders = await Order.countDocuments({ paymentStatus: 'paid' });
    const totalRevenue = await Order.aggregate([
      { $match: { paymentStatus: 'paid' } },
      { $group: { _id: null, total: { $sum: '$totalPrice' } } },
    ]);

    const recentOrders = await Order.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(5);

    const ordersByStatus = await Order.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalOrders,
        totalProducts,
        paidOrders,
        totalRevenue: totalRevenue[0]?.total || 0,
      },
      recentOrders,
      ordersByStatus,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
};
