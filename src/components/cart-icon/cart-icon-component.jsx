import React from 'react'
import {connect} from 'react-redux'
import { toggleCartHidden} from '../../redux/cart/cart-actions'
import './cart-icon-styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => (

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>

)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())

})

const mapStateToProps = ({cart:{cartItems}}) => ({
    //reduce will execute a function  for each value in an array
    //the function will add cartitem.quantity to the accumulated quantity for each c in cartitems
    //this is a selector = we use a slice of state to calculate a value = calc quanitiy of 
    ////items in cart based on state
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);