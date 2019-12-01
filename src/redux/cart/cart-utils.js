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