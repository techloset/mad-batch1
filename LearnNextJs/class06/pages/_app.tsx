import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (<ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
