import React from 'react'
import styled from 'styled-components'
import SignIn from '../components/signin'
import axios from 'axios'

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
      <SignIn submit={submit}></SignIn>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  text-align: center;
`

export default Login
