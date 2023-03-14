// ./pages/api/payment.ts
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, null)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000, // prix de votre produit / commande
            currency: 'eur', // devise
        })

        res.send({
            clientSecret: paymentIntent.client_secret,
        })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}