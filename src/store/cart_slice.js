import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {
  cartItems: [],
  totalAmount: 0,
  numberOfItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {
    replaceCart(state, action) {
      let totalItems = action.payload.reduce((prev, curr) => {return prev.quantity + curr.quantity});
      let totalAmount = action.payload.reduce((prev, curr) => {return prev.total + curr.total});
      state.cartItems = action.payload
      // state.totalAmount = totalAmount
      // state.numberOfItems = totalItems
    },
    addItem(state, action) {
      state.totalAmount = state.totalAmount += action.payload.price;

      state.numberOfItems++;

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      const existingCartItem = state.cartItems[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.total =
          existingCartItem.price * existingCartItem.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.totalAmount = state.totalAmount -= action.payload.price;

      state.numberOfItems--;

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );

      const existingCartItem = state.cartItems[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        let updatedItems = state.cartItems.filter(
          (item) => item.title !== action.payload.title
        );
        state.cartItems = [...updatedItems];
      } else {
        existingCartItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
