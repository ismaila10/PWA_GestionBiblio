import React from 'react'
import styled from 'styled-components'
import Logo from '../components/logo'
import url from '../assets/library.jpg'
import { Title } from '../components/texts'
import PopupExample from '../components/popup'

const Home = () => {
  return (
    <HomeContainer>
      <Title>Bienvenue dans ma bibliothèque en ligne</Title>
      <Logo url={url} width='640px' radius='15px' height='340px'></Logo>
      {/* <PopupExample></PopupExample> */}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  text-align: center;
  color: green;
`

export default Home
