import { createSlice } from "@reduxjs/toolkit";
import { modalActions } from "./modal_slice";

const defaultCart = {
  cartItems: [],
  totalAmount: 0,
  numberOfItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {
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

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      modalActions.setNotification({
        title: "Pending",
        message: "Pending request",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        modalActions.setNotification({
          title: "Success",
          message: "The request was successful",
        })
      );
    } catch (error) {
      dispatch(
        modalActions.setNotification({
          title: "Error",
          message: "The request failed",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
