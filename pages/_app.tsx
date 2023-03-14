import '../styles/globals.css'
import type { AppProps } from 'next/app'
import getStripe from '../utils/get-stripe'
import {Elements} from "@stripe/react-stripe-js";



export default function App({ Component, pageProps }: AppProps) {
  return (
      <Elements stripe={getStripe()}>
        <Component {...pageProps} />
      </Elements>
  )
}
