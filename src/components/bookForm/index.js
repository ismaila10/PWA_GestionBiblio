import React, { useState, useHistory } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import ButtonSubmit from '../button'
import { uuid } from 'uuidv4'
import { addBook, editBook } from '../../actions/book'
import { Title } from '../texts'
import i18n from "i18next";

const BookForm = ({ bookEdit, setBookEdit, showModal, setModal }) => {
  const [newBook, setNewBook] = useState({
    name: bookEdit ? bookEdit.name : '',
    author: bookEdit ? bookEdit.author : '',
    statut: 'Disponible'
  })
 
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    if (!newBook.author || !newBook.name){
      alert("Tous les champs sont requis")
    }
    else if (!bookEdit) {
      dispatch(addBook({ id: uuid(), name: newBook.name, author: newBook.author, statut: newBook.statut }))
      alert('Livre ajouté avec succés')
    } else {
      dispatch(editBook({ id: bookEdit.id, name: newBook.name, author: newBook.author, statut: newBook.statut }))
      alert('Données modifiées avec succés')
      setModal(false)
    }

    setNewBook({ name: '', author: '' })
  }

  return (
    <BookFormContainer>
      {bookEdit ? (
        <Title>{i18n.t('edit')}</Title>
      ) : (
        <Title>{i18n.t('add')}</Title>
      )}
      <StyledForm onSubmit={onSubmit}>
        <div>
          <StyledInput
            value={newBook.author}
            onChange={e => setNewBook({ ...newBook, author: e.target.value })}
            type='text'
            placeholder='Auteur du livre'
          ></StyledInput>
        </div>
        <div>
          <StyledInput
            value={newBook.name}
            onChange={e => setNewBook({ ...newBook, name: e.target.value })}
            type='text'
            placeholder='Nom du livre'
          ></StyledInput>
        </div>
        <SubmitDiv>
          <ButtonSubmit name='Valider' width='100%' height='40px'></ButtonSubmit>
        </SubmitDiv>
      </StyledForm>
    </BookFormContainer>
  )
}

const BookFormContainer = styled.div`
  align-item: center;
`
const StyledForm = styled.form`
  display: flex;
  padding-left: 20%;
  padding-top: 2%;
  min-height: 250px;
  font-size: 14px;
  width: 540px;
  margin: 0 auto;
  margin-top: 5%;
  margin-left: 5%;
  border: solid;
  border-color: #2ea44f;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #eaecef;
  box-sizing: border-box;
  display: block;
  color: #24292e;
  line-height: 1.5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`

const StyledInput = styled.input`
  display: flex;
  padding: 5px;
  width: 70%;
  height: 1.5rem;
  margin-top: 25px;
  margin-bottom: 10px;
  border-radius: 3px;
`

const SubmitDiv = styled.div`
  display: flex;
  padding: 5px;
  width: 70%;
`

export default BookForm
