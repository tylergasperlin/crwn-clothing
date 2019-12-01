import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import './cart-dropdown-styles.scss'

import CustomButtom from '../custom-button/custom-button-component'
import CartItem from '../cart-item/cart-item-component'

import { selectCartItems } from '../../redux/cart/cart-selectors'

const CartDropdown = ({cartItems, history}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        {
            cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                : (<span className='empty-message'> Your cart is empty</span>)
        }
        <CustomButtom onClick={()=>history.push('/checkout')}>
            GO TO CHECKOUT
        </CustomButtom>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems

})

//since using functional component we use with router to get access to history
//with history we can navigate user to the checkout page
//this gives us access to history in state which we use in const Cartdropdown = cartitems,history
export default withRouter(connect(mapStateToProps)(CartDropdown));