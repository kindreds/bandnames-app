import { io } from 'socket.io-client'
import { createContext, useEffect, useReducer, useState } from 'react'

import SocketActions from './SocketActions'
import SocketReducer from './SocketReducer'

export const SocketContext = createContext()

const connectSocketServer = () => {
  return io('https://bandname-server.herokuapp.com/', { transports: ['websocket'] })
}

export const initialState = {
  bands: [],
  online: false
}

const SocketState = ({ children }) => {
  const [socket] = useState(connectSocketServer())
  const [state, dispatch] = useReducer(SocketReducer, initialState)

  const actions = SocketActions({ state, socket }, dispatch)

  useEffect(() => {
    socket.on('connect', () => {
      actions.setStatus(true)
    })
  }, [socket])

  useEffect(() => {
    socket.on('disconnect', () => {
      actions.setStatus(false)
    })
  }, [socket])

  useEffect(() => {
    socket.on('BANDS-FROM-SERVER', (data) => {
      actions.loadBands(data.bands)
    })
  }, [socket])

  const props = { ...state, ...actions }

  return (
    <SocketContext.Provider value={{ ...props, socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketState
