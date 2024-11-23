import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RatingInterface } from "../../util/types";

export interface RatingsState {
  ratings: RatingInterface[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialRatingsState: RatingsState = {
  ratings: [],
  isLoading: true,
  isError: false,
  error: null,
};

export const ratingsSlice = createSlice({
  name: "ratings",
  initialState: initialRatingsState,
  reducers: {
    loadRatingsSuccess: (
      state,
      action: PayloadAction<RatingInterface[] | undefined>,
    ) => {
      state.isLoading = false;
      state.ratings = action.payload;
    },
    loadRatingsFailure: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { loadRatingsSuccess, loadRatingsFailure } = ratingsSlice.actions;

export default ratingsSlice.reducer;
