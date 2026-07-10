// backend/routes/wishlist.js
const express = require('express');
const { getWishlist, addToWishlist, removeFromWishlist, clearWishlist } = require('../controllers/wishlistController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, getWishlist);
router.post('/add', protect, addToWishlist);
router.post('/remove', protect, removeFromWishlist);
router.delete('/', protect, clearWishlist);

module.exports = router;
