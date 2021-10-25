import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import './App.css';

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  return (
      <ChakraProvider theme={theme}>
        <p>theme</p>
      </ChakraProvider>
  );
}

export default App;
