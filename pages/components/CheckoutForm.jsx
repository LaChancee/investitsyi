// ./components/CheckoutForm.tsx
import React, { useState} from 'react'
import {CardElement, useElements} from '@stripe/react-stripe-js'

import getStripe from 'utils/get-stripe'

import Header from "./Header";

const CARD_OPTIONS = {
    hidePostalCode: true,
    style: {
        base: {
            iconColor: '#5470e1',
            color: '#5470e1',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#5470e1',
            },
            '::placeholder': {
                color: '#5470e1',
            },
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        },
    },
}

const CheckoutForm = () => {
    const [loading, setLoading] = useState(false)
    const elements = useElements()

    const handleSubmit = async (event) => {
        const handleSubmit = async event => {
            event.preventDefault()
            setLoading(true)
            const stripe = await getStripe()

            if (!stripe || !elements) {
                setLoading(false)
                alert('Please enter a valid card number')
                return
            }

            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        email: 'test@gmail.com',
                        name: 'Premier Octet',
                        address: {
                            city: 'Paris',
                            postal_code: '75000',
                        },
                    },
                },
            })

            if (payload.error) {
                alert(`Payment failed : ${payload.error.message} ❌`)
                setLoading(false)
            } else {
                setLoading(false)
                alert('Payment succeeded ✅')
            }
        }
    }
    return (
        <>
            <Header></Header>
            <Box m="0 auto" py={5} textAlign="center">
                <Text fontWeight={700} fontSize={25} mb={10} color="#5470e1">
                    Stripe + Next.JS Demo
                </Text>
                <form onSubmit={handleSubmit}>
                    <>
                        <CardElement options={CARD_OPTIONS}/>
                        {loading ? (
                            <Spinner color="blue.500" size="lg" mt="md"/>
                        ) : (
                            <Button
                                bgColor="#5470e1"
                                color="white"
                                fontSize={15}
                                m="0 auto"
                                type="submit"
                                mt={10}
                                _hover={{
                                    bgColor: '#425cc4',
                                }}
                            >
                                Payer
                            </Button>
                        )}
                    </>
                </form>
            </Box>
    </>

    )
}

export default CheckoutForm