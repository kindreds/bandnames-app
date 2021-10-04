import { Tr, Th, Table, Thead, Tbody } from '@chakra-ui/table'

import BandItem from './BandItem'
import EditBand from './EditBand'
import useSocket from '../hooks/useSocket'
import { useDisclosure } from '@chakra-ui/hooks'
import { useState } from 'react'

const BandList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { bands, editBand, deleteBand } = useSocket()
  const [band, setBand] = useState({ id: 0, name: '', votes: 0 })

  const handleEdit = (band) => {
    onOpen()
    setBand(band)
  }

  const handlePlusVotes = (band) => {
    editBand({ ...band, votes: band.votes + 1 })
  }

  const handleDelete = (band) => {
    deleteBand(band.id)
  }

  const handleSubmitModal = (name) => {
    editBand({ ...band, name })
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
