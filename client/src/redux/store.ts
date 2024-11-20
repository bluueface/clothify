import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/ProductReducer";
import cartReducer from "./reducer/cartReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
