import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import './App.css'

interface AppProps {}

const App: React.FC<AppProps> = () => <ChakraProvider theme={theme} resetCSS />

export default App
