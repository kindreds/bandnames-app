import { types } from './types'

export const SocketActions = ({ socket }, dispatch) => {
  const addBand = (name) => {
    socket.emit('ADD-BAND', { name })
    // dispatch({ type: types.ADD_BAND, payload: name })
  }

  const editBand = (band) => {
    dispatch({ type: types.EDIT_BAND, payload: band })
    socket.emit('EDIT-BAND', band)
  }

  const deleteBand = (bandId) => {
    dispatch({ type: types.DELETE_BAND, payload: bandId })
    socket.emit('DELETE-BAND', bandId)
  }

  const loadBands = (bands) => {
    dispatch({ type: types.LOAD_BANDS, payload: bands })
  }

  const setStatus = (isOnline) => {
    dispatch({ type: types.STATUS_CONNECT, payload: isOnline })
  }

  return {
    addBand,
    editBand,
    loadBands,
    deleteBand,
    setStatus
  }
}

export default SocketActions
