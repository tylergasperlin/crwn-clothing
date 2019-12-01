import {CartActionTypes, } from './cart-types';
import { addItemToCart } from './cart-utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                //action payload is item we want to add
                cartItems: addItemToCart(state.cartItems, action.payload) 
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                //filter returns anyhting that is true
                //this will give us a new array of everything but what we are trying to clear
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default: 
            return state;
    }

};

export default cartReducer;