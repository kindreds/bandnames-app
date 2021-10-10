import { Badge, Flex, Text } from '@chakra-ui/layout'

import useSocketContext from '../hooks/useSocketContext'

const ServiceStatus = () => {
  const { online } = useSocketContext()

  return (
    <Flex position="fixed" top={0} left={4} alignItems="center" mt={2}>
      <Text mr="2">Service status: </Text>
      <Badge colorScheme={online ? 'green' : 'red'}>
        {online ? 'Online' : 'Offline'}
      </Badge>
    </Flex>
  )
}

export default ServiceStatus
