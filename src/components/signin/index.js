import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Logo from '../logo'
import url from '../../assets/logo1.jpg'
import ButtonSubmit from '../button'
import ErrorMessage from '../error'
import i18n from "i18next"

const SignIn = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  return (
    <FormContainer>
      <SignInForm
        onSubmit={e => submit(e, formState, setErrorMessage, history)}
      >
        <Logo url={url} alt='Logo'></Logo>
        <SignTitle> {i18n.t('log')}</SignTitle>
        <>
          <SignInInput
            placeholder={i18n.t('user')}
            onChange={e =>
              setFormState({ ...formState, username: e.target.value })
            }
            type='text'
          ></SignInInput>
          <SignInInput
            placeholder={i18n.t('password')}
            onChange={e =>
              setFormState({ ...formState, password: e.target.value })
            }
            type='password'
          ></SignInInput>
          <ErrorMessage errorMessage={errorMessage}></ErrorMessage>
          <ButtonSubmit name={i18n.t('sign')} width='60%'></ButtonSubmit>
        </>
        <SignInp>{i18n.t('welcome')}</SignInp>
      </SignInForm>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  font-size: 14px;
  width: 540px;
  margin: 0 auto;
  margin-top: 2%;
  border-radius: 8px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
  box-sizing: border-box;
  display: block;
  color: #24292e;
  line-height: 1.5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignInp = styled.p``

const SignInInput = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  display: block;
  width: 60%;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: rgb(232, 240, 254);
  padding: 5px;
`

const SignTitle = styled.h2`
  margin: 10% 0% 10% 0%;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0.5px;
`
export default SignIn
