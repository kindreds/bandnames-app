import { useEffect, useState } from 'react'
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

const EditBand = ({ isOpen, band, onCancel = () => {}, onEdit = () => {} }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(band.name)
  }, [band])

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(text)
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent w="90%" maxWidth="400px">
        <ModalHeader>Edit Band</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form">
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
            Edit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditBand
