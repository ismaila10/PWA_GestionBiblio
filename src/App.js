import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import './App.css'
import Routes from './config/router'
import { ChangeTheme } from './components/texts'
import Logo from './components/logo'
import style from 'styled-theming'
import useTheme from './config/useTheme'
import url from './assets/sombre.jpg'
import url1 from './assets/clair.jpg'

function App() {
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
            Zoom
          </Logo>
        </ChangeTheme>
        <Routes></Routes>
      </>
    </ThemeProvider>
  )
}

const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111'
})

const getForeGround = style('mode', {
  light: '#111',
  dark: '#EEE'
})

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
    color: ${getForeGround}
  }
`

export default App
