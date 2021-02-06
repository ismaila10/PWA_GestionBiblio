import React from 'react'
import styled from 'styled-components'
import Logo from '../components/logo'
import url from '../assets/library.jpg'
import { Title } from '../components/texts'
import i18n from "i18next";

const Home = () => {
  return (
    <HomeContainer>
      <Title>{i18n.t('welcome')}</Title>
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
