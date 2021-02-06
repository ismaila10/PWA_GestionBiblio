import React, { useState } from 'react'
import Books from '../components/book'
import { Title, IconButton } from '../components/texts'

import Logo from '../components/logo'
import url from '../assets/add.png'
import Modal from '../components/popup'
import styled from 'styled-components'

const Book = () => {
  const [showModal, setModal] = useState(false)

  const openModal = () => {
    setModal(prev => !prev)
  }
  return (
    <BookContent>
      <Title>
        Liste des livres{' '}
        <IconButton onClick={openModal}>
          <Logo url={url} width='40px' top='5px'></Logo>
        </IconButton>
      </Title>
      <Modal showModal={showModal} setModal={setModal}></Modal>

      <Books></Books>
    </BookContent>
  )
}

const BookContent = styled.div``

export default Book
