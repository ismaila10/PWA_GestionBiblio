import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../components/logo'
import url from '../assets/library.jpg'
import { Title } from '../components/texts'
import Modal from '../components/popup'
import { IconButton } from '../components/texts'

const Home = () => {
  const [showModal, setModal] = useState(false)

  const openModal = () => {
    setModal(prev => !prev)
  }
  return (
    <HomeContainer>
      <IconButton onClick={openModal}>I m a Modal</IconButton>
      <Modal showModal={showModal} setModal={setModal}></Modal>
      <Title>Bienvenue dans ma bibliothèque en ligne</Title>
      <Logo url={url} width='640px' radius='15px' height='340px'></Logo>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  text-align: center;
  color: green;
  align-items: center;
`

export default Home
