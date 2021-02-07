import React, {useEffect} from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import './App.css'
import Routes from './config/router'
import { ChangeTheme, IconButton } from './components/texts'
import Logo from './components/logo'
import style from 'styled-theming'
import useTheme from './config/useTheme'
import url from './assets/sombre.jpg'
import url1 from './assets/clair.jpg'
import url2 from './assets/en.jpg'
import url3 from './assets/fr1.png'
import firebase from "./firebase";
import "./config/translation";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const {t, i18n} = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  useEffect(() =>{
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.warn("token", data)
    })
  })
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ChangeTheme
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'light' }
                : { ...theme, mode: 'dark' }
            )
          }
        >
          <Logo
            width='25px'
            float='center'
            alt='Theme'
            url={theme.mode === 'dark' ? url1 : url}
          >
          </Logo>
          
        </ChangeTheme>
        <IconButton onClick={() => changeLanguage("en")}><Logo url={url2} width='25px'></Logo></IconButton>
        <IconButton onClick={() => changeLanguage("fr")}><Logo url={url3} width='25px'></Logo></IconButton>
        <Routes></Routes>
      </>
    </ThemeProvider>
  )
}

const getBackground = style('mode', {
  light: '#808080',
  dark: '#111'
})

const getForeGround = style('mode', {
  light: '#808080',
  dark: '#EEE'
})

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
    color: ${getForeGround}
  }
`

export default App
