import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemInterface } from "../../util/types";

export interface CartState {
  items: CartItemInterface[];
  total: number;
}

const calculateTotal = (item: CartItemInterface) =>
  item.product ? item.product.price * item.quantity : 0;

const initialCartState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItemInterface[]>) => {
      let total = 0;
      for (const item of action.payload) {
        total += calculateTotal(item);
      }
      state.items = action.payload;
      state.total = total;
    },
    increaseItemQuantity: (state, action: PayloadAction<CartItemInterface>) => {
      const item = state.items.find(
        (item) => item?.product?.id === action.payload.product?.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
        state.total += calculateTotal(item);
      }
    },
    updateItemQuantity: (state, action: PayloadAction<CartItemInterface>) => {
      const item = state.items.find(
        (item) => item?.product?.id === action.payload.product?.id,
      );
      if (item) {
        item.quantity = action.payload.quantity;
        state.total = calculateTotal(item);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<CartItemInterface>) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
    resetCart: (state) => {
      state.items = initialCartState.items;
      state.total = initialCartState.total;
    },
  },
});

export const {
  addItemToCart,
  increaseItemQuantity,
  updateItemQuantity,
  removeItemFromCart,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
