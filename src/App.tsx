import React from 'react';
import {
  ChakraProvider,
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
