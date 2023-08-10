import { createSlice } from "@reduxjs/toolkit";

const defaultModal = {
  isDisplaying: false,
  notification: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: defaultModal,
  reducers: {
    setDisplaying(state) {
      state.isDisplaying = !state.isDisplaying;
    },
    setNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
