import { createSlice } from '@reduxjs/toolkit'

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {
    listCart: cart
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCart: (state, action) => {
            let cart = localStorage.getItem('cart');
            state.listCart = JSON.parse(cart);
        },
        addToCart: (state, action) => {
            console.log('----------- action: ', action);
            const itemInCart = state.listCart.filter((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity;
            } else {
                state.listCart.push({ ...action.payload, quantity: action.payload.quantity});
            }
            localStorage.setItem('cart',JSON.stringify(state.listCart));
        },
        incrementQuantity: (state, action) => {
            const item = state.listCard.filter((item) => item.id === action.payload.jd);
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.listCart))
        },
        decrementQuantity: (state ,action) => {
            const item = state.listCard.filter((item) => item.id === action.payload.id )
            if (item.quantity === 1) {
                item.quantity  = 1;
            } else {
                item.quantity--;
            }

            localStorage.setItem('cart', JSON.stringify(state.listCart));
        },
        removeItem: (state, action) => {
            let removeItem =  state.listCart.filter((item) => item.id !== action.payload.id)
            state.listCart = removeItem;
            localStorage.setItem('cart', JSON.stringify(state.listCart))
        }

    }})

export const { getCart, addToCart, removeItem, remoteAll, decrementQuantity, incrementQuantity } = cartSlice.actions

export default cartSlice.reducer