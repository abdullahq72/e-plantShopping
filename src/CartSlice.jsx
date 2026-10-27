import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // each item: { name, image, cost, quantity }
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a plant to the cart. If it is already there, bump its quantity.
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove a plant from the cart entirely.
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Set a plant's quantity. A quantity below 1 removes the plant.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (!existing) return;
      if (quantity < 1) {
        state.items = state.items.filter((item) => item.name !== name);
      } else {
        existing.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
