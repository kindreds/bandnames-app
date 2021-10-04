import { types } from './types'
import { initialState } from './SocketState'

const SocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_BAND:
      return {
        ...state,
        bands: [...state.bands, payload]
      }

    case types.EDIT_BAND:
      return {
        ...state,
        bands: state.bands.map((band) => {
          return band.id === payload.id ? payload : band
        })
      }

    case types.DELETE_BAND:
      return {
        ...state,
        bands: state.bands.filter((band) => band.id !== payload)
      }

    case types.LOAD_BANDS:
      return {
        ...state,
        bands: [...payload]
      }

    case types.STATUS_CONNECT:
      return {
        ...state,
        online: payload
      }

    default:
      return state
  }
}

export default SocketReducer
