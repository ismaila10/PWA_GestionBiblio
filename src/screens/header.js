import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Logo from '../components/logo'
import Logout from '../components/logout'
import url from '../assets/logo1.jpg'
import url1 from '../assets/img.jpg'
import { UserName, Linked } from '../components/texts'
import i18n from "i18next";


const Header = () => {
  const history = useHistory()
  const [isToken, setToken] = useState(localStorage.getItem('token'))
  const onClick = () => {
    localStorage.removeItem('token')
    setToken(null)
    history.push('/')
  }

  return (
    <HeaderContainer>
      <div>
        <Link to='/home'>
          <Logo url={url} top='12px' alt='Logo' width='50px'></Logo>
        </Link>
        <Link to='/home'>
          <Linked>{i18n.t('home')}</Linked>
        </Link>
        <Link to='/book'>
          <Linked>{i18n.t('book')}</Linked>
        </Link>
        <Logo
          url={url1}
          radius='30px'
          float='right'
          alt='Logo'
          width='60px'
          top='5px'
        ></Logo>
        <UserName>Ismaila</UserName>
        {isToken ? (
          <Logout handleClick={onClick}></Logout>
        ) : //Ne s'affiche qu'aprés refresh de la page (apres auth) malgrés le state comme je vous avais montré
        null}
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: 'blue';
  min-height: 5rem;
  padding-top: 15px;
  padding-left: 15px;
  color: white;
`

export default Header
