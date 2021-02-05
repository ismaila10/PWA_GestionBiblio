import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../actions/book'
import Logo from '../logo'
import url from '../../assets/edit.jpg'
import url1 from '../../assets/delete1.png'
import { IconButton } from '../texts'
import book from '../../reducers/book'
import Modal from '../popup'

const Books = () => {
  const bookListe = useSelector(state => state.book.list)
  const [showModal, setModal] = useState(false)
  const [bookEdit, setBookEdit] = useState({
    id: book.id,
    name: book.name,
    author: book.author,
    statut: book.statut
  })
  console.log(bookListe)
  const dispatch = useDispatch()
  const onSubmitEdit = (e, book) => {
    setBookEdit(book)
    setModal(prev => !prev)
  }
  return (
    <BookContainer>
      <Modal
        showModal={showModal}
        bookEdit={bookEdit}
        setBookEdit={setBookEdit}
        setModal={setModal}
      ></Modal>
      <StyledTable>
        <StyledThead>Auteur</StyledThead>
        <StyledThead>Intitulé livre</StyledThead>
        <StyledThead>Statut</StyledThead>
        <StyledThead>Editer</StyledThead>
        <StyledThead>Supprimer</StyledThead>
        {bookListe.map(book =>
          book.id ? (
            <tr key={book.id}>
              <td>{book.author}</td>
              <td>{book.name}</td>
              <td>{book.statut}</td>
              <td>
                <IconButton onClick={e => onSubmitEdit(e, book)}>
                  <Logo url={url} top='10px' width='1.5rem'></Logo>
                </IconButton>
              </td>
              <td>
                <IconButton onClick={() => dispatch(deleteBook(book.id))}>
                  <Logo url={url1} top='10px' width='1.5rem'></Logo>
                </IconButton>
              </td>
            </tr>
          ) : null
        )}
      </StyledTable>
    </BookContainer>
  )
}

const BookContainer = styled.div``

const StyledTable = styled.table`
  display: flex;
  padding: 20px;
  width: 740px;
  margin: 0 auto;
  margin-top: 5%;
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

const StyledThead = styled.th`
  justify-content: center;
  width: 25%;
`

export default Books
