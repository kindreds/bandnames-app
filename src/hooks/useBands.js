import useSocket from './useSocket'

const useBands = () => {
  const { bands } = useSocket()

  const deleteBand = () => {}

  const createBand = (text) => {}

  return { bands, deleteBand, createBand }
}

export default useBands
