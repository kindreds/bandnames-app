import { useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Tr, Th, Table, Thead, Tbody } from '@chakra-ui/table'

import BandItem from './BandItem'
import EditBand from './EditBand'
import useSocketContext from '../hooks/useSocketContext'

const BandList = () => {
  const { socket } = useSocketContext()
  const [bands, setBands] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [band, setBand] = useState({ id: 0, name: '', votes: 0 })

  useEffect(() => {
    socket.on('BANDS-FROM-SERVER', (data) => {
      setBands(data.bands)
    })
  }, [])

  const handleEdit = (band) => {
    onOpen()
    setBand(band)
  }

  const handlePlusVotes = (band) => {
    const payload = { ...band, votes: band.votes + 1 }
    socket.emit('EDIT-BAND', payload)
  }

  const handleDelete = (band) => {
    socket.emit('DELETE-BAND', band.id)
  }

  const handleSubmitModal = (name) => {
    const payload = { ...band, name }
    socket.emit('EDIT-BAND', payload)
    onClose()
    setBand({ id: 0, name: '', votes: 0 })
  }

  return (
    <>
      <EditBand
        band={band}
        isOpen={isOpen}
        onCancel={onClose}
        onEdit={handleSubmitModal}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th textAlign="center" pr={0}>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {bands.map((band) => (
            <BandItem
              key={band.id}
              band={band}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onPlusVotes={handlePlusVotes}
            />
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export default BandList
