import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryInterface } from "../../util/types";

export interface CategoriesState {
  categories: CategoryInterface[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialCategoriesState: CategoriesState = {
  categories: [],
  isLoading: true,
  isError: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    loadCategoriesSuccess: (
      state,
      action: PayloadAction<CategoryInterface[] | undefined>,
    ) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    loadCategoriesFailure: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { loadCategoriesSuccess, loadCategoriesFailure } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
