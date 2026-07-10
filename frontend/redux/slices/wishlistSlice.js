import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setWishlist: (state, action) => {
      state.items = action.payload.items || [];
      state.error = null;
    },
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setWishlist, addToWishlist, removeFromWishlist, clearWishlist, setError } = wishlistSlice.actions;
export default wishlistSlice.reducer;
