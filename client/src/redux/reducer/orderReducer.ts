import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderInterface } from "../../util/types";

export interface OrdersState {
  orders: OrderInterface[] | undefined;
  orderToCreate: OrderInterface | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialOrdersState: OrdersState = {
  orders: [],
  orderToCreate: undefined,
  isLoading: true,
  isError: false,
  error: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialOrdersState,
  reducers: {
    loadOrdersSuccess: (
      state,
      action: PayloadAction<OrderInterface[] | undefined>,
    ) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    loadOrdersFailure: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    setOrderToCreate: (
      state,
      action: PayloadAction<OrderInterface | undefined>,
    ) => {
      state.orderToCreate = action.payload;
    },
  },
});

export const { loadOrdersSuccess, loadOrdersFailure, setOrderToCreate } =
  ordersSlice.actions;

export default ordersSlice.reducer;
