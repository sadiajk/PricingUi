'use client'
import { ListItem, Pricing } from "./allui/Pricing"


import { ChakraProvider } from '@chakra-ui/react'
import { Header } from "./allui/Header"
import { Features } from "./allui/Features"

function MyApp( ) {
  return (
    <ChakraProvider>
<Header/>
   <Pricing/>
   <Features/>
   </ChakraProvider>

  )
}

export default MyApp