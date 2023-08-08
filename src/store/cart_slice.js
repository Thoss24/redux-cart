import { createSlice, current } from "@reduxjs/toolkit";

const defaultCart = {
    cartItems: [{ title: 'Test Item', quantity: 3, total: 18, price: 6 }],
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultCart,
    reducers: {
        addItem(state, action) {
    
            const existingCartItemIndex = state.cartItems.findIndex((item) =>  item.title === action.payload.title)

            const existingCartItem = state.cartItems[existingCartItemIndex]

            if (existingCartItem) {
                // const updatedItem = {
                //     ...existingCartItem,
                //     quantity: existingCartItem.quantity + 1
                // }
                // state.cartItems[existingCartItemIndex] = updatedItem
                existingCartItem.quantity ++
                console.log(current(state))
            }

            state.cartItems.concat(action.payload)
            
        },
        removeItem(state) {

        },
    }
});

export const cartActions = cartSlice.actions
export default cartSlice.reducer