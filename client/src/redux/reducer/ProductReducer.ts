import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../util/types";

export interface ProductsState {
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialProductsState: ProductsState = {
  products: [],
  isLoading: true,
  isError: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    loadProductsSuccess: (
      state,
      action: PayloadAction<Product[] | undefined>,
    ) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    loadProductsFailure: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { loadProductsSuccess, loadProductsFailure } =
  productsSlice.actions;

export default productsSlice.reducer;
