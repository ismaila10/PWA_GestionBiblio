import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../actions/book'
import Logo from '../logo'
import url from '../../assets/edit.jpg'
import url1 from '../../assets/delete1.png'
import { IconButton, Title } from '../texts'
import book from '../../reducers/book'
import Modal from '../popup'
import url2 from '../../assets/add.png'
import i18n from "i18next";

const Books = () => {
  const bookListe = useSelector(state => state.book.list)
  const [showModal, setModal] = useState(false)
  const [bookEdit, setBookEdit] = useState({
    id: book.id,
    name: book.name,
    author: book.author,
    statut: book.statut
  })
  const openModal = () => {
    setModal(prev => !prev)
  }
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
      <Title>
        {i18n.t('list')}{' '}
        <IconButton onClick={openModal}>
          <Logo url={url2} width='40px' top='5px'></Logo>
        </IconButton>
      </Title>
      <StyledTable>
        <div> 
        {bookListe.map(book =>
            book.id ? (
              <>
              <SpanB>
                <h3>{book.author}</h3>
                <p>{book.name}</p>
                <IconButton onClick={e => onSubmitEdit(e, book)}>
                  <Logo url={url} top='10px' width='1.5rem'></Logo>
                </IconButton>
                <IconButton onClick={() => dispatch(deleteBook(book.id))}>
                  <Logo url={url1} top='10px' width='1.5rem'></Logo>
                </IconButton>
                <p><span>{book.statut}</span></p>
              </SpanB> 
              </>
            ) : null
          )}
        </div>      
      </StyledTable>
    </BookContainer>
  )
}

const BookContainer = styled.div``

const StyledTable = styled.table`
  display: flex;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 8px;
  background-color: #D3D3D3;
  border: 1px solid #eaecef;
  box-sizing: border-box;
  display: block;
  color: #24292e;
  line-height: 1.5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`

const SpanB = styled.div`
  display: inline-block;
  width: 150px;
  height: 120px;
  padding: 5px;
  margin: 8px;
  border-radius: 13px;
  border: 1px solid none;    
  background-color: white; 
`

export default Books
