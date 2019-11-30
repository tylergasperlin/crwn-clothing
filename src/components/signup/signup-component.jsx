import React from 'react';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'
import {createUserProfileDocument, auth} from '../../firebase/firebase-utils'
import './signup-styles.scss'

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert('passwords do not match')
            return;
        }

        try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '', 
            })
        } catch(error){
            console.error(error)
        }
    }

    handleSubmit = event => {
        const {name,value} = event.target

        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' obSubmit={this.handleSubmit}></form>
            <FormInput 
                type= 'text'
                displayName= {displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
                />
            <FormInput 
                type= 'email'
                displayName= 'email'
                onChange={email}
                label='Email'
                required
            />
            <FormInput 
                type= 'password'
                displayName= 'password'
                onChange={password}
                label='Password'
                required
            />
            <FormInput 
                type= 'password'
                displayName= 'confirmPassword'
                onChange={confirmPassword}
                label='Display Name'
                required
            />
            <FormInput 
                type= 'text'
                displayName= 'displayName'
                onChange={this.handleChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
            </div>

        )

    }


}

export default SignUp;