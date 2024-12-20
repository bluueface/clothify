import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/ProductReducer";
import cartReducer from "./reducer/cartReducer";
import categoryReducer from "./reducer/categoryReducer";
import orderReducer from "./reducer/orderReducer";
import userReducer from "./reducer/userReducer";
import ratingReducer from "./reducer/ratingReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
    orders: orderReducer,
    users: userReducer,
    ratings: ratingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
