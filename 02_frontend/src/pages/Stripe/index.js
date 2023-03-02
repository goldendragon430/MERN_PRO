import React from 'react'
import { Stripe as StripeController } from '../../components/main/Stripe'

export const Stripe = (props) => {
  return (
    <>
      <StripeController {...props} />
    </>
  )
}
