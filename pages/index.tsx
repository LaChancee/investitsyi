import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import App from './App'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <App/>
      </main>
      <Footer/>
    </>
  )
}
