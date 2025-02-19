import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebar-slice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
