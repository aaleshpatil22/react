import React from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

const PaymentProcess = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    }

    if (!error) {
        try {
            const { id } = paymentMethod
            const response = await axios.post("http://localhost:4000/payment".{
                amount: 1000
            })

            if (response.data.success) {
                console.log("Successfull payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }

    return (
        <>

            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className='FormRow'>

                        </div>
                    </fieldset>
                </form>}

        </>
    )
}

export default PaymentProcess