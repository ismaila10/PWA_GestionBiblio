import React from 'react'
import styled from 'styled-components'
import SignIn from '../components/signin'
import axios from 'axios'
import i18n from "i18next";

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()
  if (!formState.username || !formState.password) {
    setErrorMessage('Veuillez remplir tous les champs')
    return
  }
  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/home')
    })
    .catch(err => {
      setErrorMessage(err + 'Une erreur est survenue')
    })
}

const Login = () => {
  return (
    <LoginContainer>
      <p>{i18n.t('menu')}</p>
      <SignIn submit={submit}></SignIn>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  text-align: center;
`

export default Login
