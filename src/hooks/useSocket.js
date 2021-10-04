import { useContext } from 'react'
import { SocketContext } from '../context/SocketState'

const useSocket = () => {
  return useContext(SocketContext)
}

export default useSocket
