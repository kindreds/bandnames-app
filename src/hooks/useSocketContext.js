import { useContext } from 'react'
import { SocketContext } from '../context/SocketState'

const useSocketContext = () => {
  return useContext(SocketContext)
}

export default useSocketContext
