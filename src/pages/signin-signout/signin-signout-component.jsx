import React from 'react'
import SignIn from '../../components/signin/signin-component'
import SignUp from '../../components/signup/signup-component'
import './signin-signout-styles.scss'

const SignInSignOutPqge = () => (
    <div className='sign-in-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>


)

export default SignInSignOutPqge;