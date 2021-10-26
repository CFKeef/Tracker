import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import './App.css'
import { Layout } from "./common/layout";

interface AppProps {}

const App: React.FC<AppProps> = () => <ChakraProvider theme={theme} resetCSS >
  <Layout >
    <p>asdasd</p>
  </Layout>
</ChakraProvider>

export default App
