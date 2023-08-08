import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart_slice';
import modalReducer from './modal_slice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
});

export default store