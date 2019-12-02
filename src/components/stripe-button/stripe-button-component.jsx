import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    //stripe neewd all amounts in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_Zmfsw5QAk6QeNwZnDLLCFQ7i009JSVLmEl'
    const imageUrl = 'https://sendeyo.com/up/d/f3eb2117da'

    //placeholder
    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image={imageUrl}
            description={`Your price is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;