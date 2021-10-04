import useSocket from './useSocket'

const useModal = () => {
  const { modal } = useSocket()
  return { ...modal }
}

export default useModal
