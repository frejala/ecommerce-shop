import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebar-slice";
import cartSlice from "./slices/cart-slice";
import productsSlice from "./slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    sidebar: sidebarSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
