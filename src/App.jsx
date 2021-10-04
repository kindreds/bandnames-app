import { Button } from '@chakra-ui/button'
import { Flex, Heading, Divider, Container } from '@chakra-ui/layout'

import AddBand from './components/AddBand'
import BandList from './components/BandList'
import ServiceStatus from './components/ServiceStatus'
import { useDisclosure } from '@chakra-ui/hooks'
import useSocket from './hooks/useSocket'

const App = () => {
  const { addBand } = useSocket()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCreate = (name) => {
    addBand(name)
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <div>
      <AddBand
        isOpen={isOpen}
        onCancel={handleCancel}
        onCreate={handleCreate}
      />
      <ServiceStatus />
      <Container my={14}>
        <Flex justifyContent="space-between">
          <Heading textAlign="center" fontWeight="thin">
            BANDNAMES
          </Heading>
          <Button onClick={onOpen} colorScheme="blue">
            ADD BAND
          </Button>
        </Flex>
        <Divider mt={4} />
        <BandList />
      </Container>
    </div>
  )
}

export default App
