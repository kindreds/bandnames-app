import { Tr, Td } from '@chakra-ui/table'
import { IconButton } from '@chakra-ui/button'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'

const BandItem = ({
  band,
  onEdit = () => {},
  onDelete = () => {},
  onPlusVotes = () => {}
}) => {
  return (
    <Tr>
      <Td pl={0}>
        <Flex alignItems="center">
          <IconButton
            mr={5}
            size="sm"
            variant="outline"
            colorScheme="blue"
            icon={<Text>+1</Text>}
            onClick={() => onPlusVotes(band)}
          />
          <Box>
            <Text fontWeight="semibold">{band.name}</Text>
            <Text color="gray" fontSize="sm" fontWeight="thin">
              votes: {band.votes}
            </Text>
          </Box>
        </Flex>
      </Td>
      <Td pr={0}>
        <Flex justifyContent="center">
          <HStack>
            <IconButton
              size="sm"
              variant="outline"
              colorScheme="blue"
              icon={<EditIcon />}
              onClick={() => onEdit(band)}
            />
            <IconButton
              size="sm"
              variant="outline"
              colorScheme="blue"
              icon={<DeleteIcon />}
              onClick={() => onDelete(band)}
            />
          </HStack>
        </Flex>
      </Td>
    </Tr>
  )
}

export default BandItem
