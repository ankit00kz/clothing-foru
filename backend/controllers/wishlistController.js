// backend/controllers/wishlistController.js
const Wishlist = require('../models/Wishlist');

exports.getWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ userId: req.user.id }).populate('items.productId');

    if (!wishlist) {
      wishlist = new Wishlist({ userId: req.user.id, items: [] });
      await wishlist.save();
    }

    res.status(200).json({
      success: true,
      data: wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Please provide product ID',
      });
    }

    let wishlist = await Wishlist.findOne({ userId: req.user.id });

    if (!wishlist) {
      wishlist = new Wishlist({ userId: req.user.id });
    }

    const itemExists = wishlist.items.find(item => item.productId.toString() === productId);

    if (itemExists) {
      return res.status(400).json({
        success: false,
        message: 'Product already in wishlist',
      });
    }

    wishlist.items.push({ productId });
    wishlist.updatedAt = Date.now();
    await wishlist.save();

    res.status(200).json({
      success: true,
      message: 'Added to wishlist',
      data: wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: req.user.id },
      { $pull: { items: { productId } }, updatedAt: Date.now() },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Removed from wishlist',
      data: wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.clearWishlist = async (req, res) => {
  try {
    await Wishlist.findOneAndUpdate(
      { userId: req.user.id },
      { items: [], updatedAt: Date.now() },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Wishlist cleared',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
