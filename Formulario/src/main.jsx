import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Importando o chakra para trabalharmos com o tema dele*/}
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
