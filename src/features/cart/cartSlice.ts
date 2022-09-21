import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
  items: { [productId: string]: number };
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export function getNumItems(state: RootState) {
  let numItems = 0;
  console.log("calling numItems");
  for (let id in state.cart.items) {
    numItems += state.cart.items[id];
  }
  return numItems;
}

export const getMemoizedItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let numItems = 0;
    console.log("calling memoized items");
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);
