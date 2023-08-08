import { createSlice } from "@reduxjs/toolkit";

const defaultModal = {
    isDisplaying: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: defaultModal,
    reducers: {
        setDisplaying(state) {
            state.isDisplaying = !state.isDisplaying
        }
    }
});

export const modalActions = modalSlice.actions
export default modalSlice.reducer