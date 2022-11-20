import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from 'next/app'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
   {/* <Header/> */}
   <Component {...pageProps} />
   {/* <Footer/> */}
    </ChakraProvider>

  )
}
