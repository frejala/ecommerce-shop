import { CartItem } from "@/interfaces/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.splice(state.indexOf(existingItem), 1);
        } else {
          existingItem.quantity--;
        }
      }
    },
    clear: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
