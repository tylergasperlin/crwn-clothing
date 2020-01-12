import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase-utils'
import CartIcon from '../cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown-component'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import { selectCurrentUser} from '../../redux/user/user-selectors'
import './header-styles.scss'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) =>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP</OptionLink>
            <OptionLink to='/shop'> CONTACT </OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' to='' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>

)

//rather than = state => we can use createstructoredSelector from reselct
const mapStateToProps = createStructuredSelector({
    //instead of selectCurrentUser(state) we can use createStructuredSelctor from reselect
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})

export default connect(mapStateToProps)(Header);