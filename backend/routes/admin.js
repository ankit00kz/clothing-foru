const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const adminAuthMiddleware = require('../middleware/adminAuth');
const adminController = require('../controllers/adminController');

// Apply auth middleware to all admin routes
router.use(authMiddleware, adminAuthMiddleware);

// ==== USER ROUTES ====
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.put('/users/:id/role', adminController.updateUserRole);
router.put('/users/:id/deactivate', adminController.deactivateUser);
router.delete('/users/:id', adminController.deleteUser);

// ==== ORDER ROUTES ====
router.get('/orders', adminController.getAllOrders);
router.get('/orders/:id', adminController.getOrderById);
router.put('/orders/:id/status', adminController.updateOrderStatus);
router.put('/orders/:id/payment-status', adminController.updatePaymentStatus);

// ==== PRODUCT ROUTES ====
router.get('/products', adminController.getAllProducts);
router.post('/products', adminController.createProduct);
router.put('/products/:id', adminController.updateProduct);
router.delete('/products/:id', adminController.deleteProduct);

// ==== DASHBOARD ROUTES ====
router.get('/dashboard/stats', adminController.getDashboardStats);

module.exports = router;
