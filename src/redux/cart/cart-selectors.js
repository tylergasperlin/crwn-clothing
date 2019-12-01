import {createSelector} from 'reselect'

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity, 0)

)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + (cartItem.quantity * cartItem.price), 0)

)


//notes//
    //reselect makes it so that the component does not rerender when there are state changes unrelated
    //to the ones you mdde the selector for. In this case if we sign in or sign out the cart will 
    //continue to display the items in the cart

    //reduce will execute a function  for each value in an array
    //the function will add cartitem.quantity to the accumulated quantity for each c in cartitems
    //this is a selector = we use a slice of state to calculate a value = calc quanitiy of 
    ////items in cart based on state
