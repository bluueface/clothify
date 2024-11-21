import { UserInterface } from "../../util/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  users: UserInterface[] | undefined;
  connectedUser: UserInterface | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialUsersState: UsersState = {
  users: [],
  connectedUser: undefined,
  isLoading: true,
  isError: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loadUsersSuccess: (
      state,
      action: PayloadAction<UserInterface[] | undefined>,
    ) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    loadUsersFailure: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    setConnectedUser: (
      state,
      action: PayloadAction<UserInterface | undefined>,
    ) => {
      state.connectedUser = action.payload;
    },
  },
});

export const { loadUsersSuccess, loadUsersFailure, setConnectedUser } =
  usersSlice.actions;

export default usersSlice.reducer;
