import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, editBook } from '../../actions/book'
import Logo from '../logo'
import url from '../../assets/edit.jpg'
import url1 from '../../assets/delete1.png'
import { IconButton } from '../texts'
import BookForm from '../bookForm'
import book from '../../reducers/book'

const Books = () => {
  const bookListe = useSelector(state => state.book.list)
  const [modeEdit, setModeEdit] = useState(false)
  const dispatch = useDispatch()
  const onSubmitEdit = (e, book) => {
    console.log(book.id)
    console.log(book.value.name)
    console.log(book.value.author)
    console.log(book.value.statut)
  }
  return (
    <BookContainer>
      <StyledTable>
        <StyledThead>Auteur</StyledThead>
        <StyledThead>Intitulé livre</StyledThead>
        <StyledThead>Statut</StyledThead>
        <StyledThead>Editer</StyledThead>
        <StyledThead>Supprimer</StyledThead>
        {bookListe.map(
          book =>
            book.id ? (
              <tr key={book.id}>
                <td>{book.value.author}</td>
                <td>{book.value.name}</td>
                <td>{book.value.statut}</td>
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
            ) : null,
          modeEdit ? <BookForm book={book.id}></BookForm> : null
        )}
      </StyledTable>
    </BookContainer>
  )
}

const BookContainer = styled.div``

const StyledTable = styled.table`
  display: flex;
  padding: 20px;
  font-size: 14px;
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
