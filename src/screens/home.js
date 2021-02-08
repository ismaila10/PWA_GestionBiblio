import React from 'react'
import styled from 'styled-components'
import Logo from '../components/logo'
import url from '../assets/library.jpg'
import { Title } from '../components/texts'
import i18n from "i18next";

const Home = () => {
  return (
    <HomeContainer>
      <TitleDiv>
        <Title>{i18n.t('welcome')}</Title>
      </TitleDiv>
      
      <ImageDiv>
        <Logo url={url} width='640px' radius='15px' top='2%' height='340px'></Logo>
      </ImageDiv>
      
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  text-align: center;
  color: green;
  align-items: center;
`

const ImageDiv = styled.div`
animation-duration: 4s;
animation-name: glissement;
animation-direction: normal;
animation-iteration-count: infinite;
@keyframes glissement {
  from {
    margin-left: 50%;
    width: 100%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
`

const TitleDiv = styled.div`
animation-duration: 5s;
animation-name: glissement;
animation-direction: normal;
animation-iteration-count: infinite;
@keyframes glissement {
  from {
    margin-left: 100%;
    width: 100%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
`

export default Home
