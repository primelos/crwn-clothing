import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51I9RLeFRfCusvP6TsEgXNKN4n3YGC3hIRooHS8p4UtJPB5RSVxeyD7Uj8ZGXZE12dlBV3QBfBlSMOAKMhYE5Cosc006wGaPYAP';
  
  // this would take the token to pass to the backend to create the charge
  const onToken = token => {
    console.log("token", token);
    alert('payment successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      />    
  )
}


export default StripeCheckoutButton
