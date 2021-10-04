import { useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalCloseButton
} from '@chakra-ui/modal'
import { Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'

const AddBand = ({ isOpen, onCancel = () => {}, onCreate = () => {} }) => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    onCreate(text)
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent w="90%" maxWidth="400px">
        <ModalHeader>Add Band</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form" onSubmit={e => e.preventDefault()}>
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={text}
                autoComplete="off"
                onChange={(e) => setText(e.target.value)}
              />
              <FormHelperText>Only metal bands.</FormHelperText>
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter w="full" justifyContent="space-between">
          <Button
            mr={3}
            variant="outline"
            colorScheme="blue"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} colorScheme="blue">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddBand
