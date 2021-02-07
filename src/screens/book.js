import React, { useState } from 'react'
import Books from '../components/book'
import Modal from '../components/popup'
import styled from 'styled-components'

const Book = () => {
  const [showModal, setModal] = useState(false)


  return (
    <BookContent>
      <Modal showModal={showModal} setModal={setModal}></Modal>
      <Books></Books>
    </BookContent>
  )
}

const BookContent = styled.div`
  text-align: center;
  align-items: center;
`

export default Book
