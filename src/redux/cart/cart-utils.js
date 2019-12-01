export const addItemToCart = (cartItems, cartItemsToAdd) => {
    //find basedon id or return undefined
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id)

    //if a cart item is found 
    //if cart item already exists increase 
    //otherwise jus add
    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === cartItemsToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            ) 
    }

    //this only runs if a cart item does not exist. Sets initial quantity
    return [...cartItems, {...cartItemsToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemsToRemove) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    )
    //if cart item quanitiy = 1 remove from the cart 
    if(existingCartItem.quantity === 1){
        //filter out all that = the id we are trying to remove
        return cartItems.filter(cartItem => cartItem.id !==cartItemsToRemove.id)
    }

    //if cartitem is not equal to one than decrease quantity by one
    return cartItems.map(
        cartItem => cartItem.id === cartItemsToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )

}