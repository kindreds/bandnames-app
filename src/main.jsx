import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import theme from './theme'
import SocketState from './context/SocketState'

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <SocketState>
      <App />
    </SocketState>
  </ChakraProvider>,
  document.getElementById('root')
)
