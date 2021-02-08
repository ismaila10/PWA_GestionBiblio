import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../actions/book'
import Logo from '../logo'
import url from '../../assets/edit.jpg'
import url1 from '../../assets/delete1.png'
import url2 from '../../assets/pret2.png'
import url3 from '../../assets/pret.png'
import { IconButton } from '../texts'
import book from '../../reducers/book'
import Modal from '../popup'
import { editBook } from '../../actions/book'
import i18n from "i18next";
import { useHistory } from 'react-router-dom'

const Books = () => {
  const bookListe = useSelector(state => state.book.list)
  const history = useHistory()
  /* Récupérer liste des user pour afficher les fonctions edit ou delete en fonction du role de l'user
   itérer sur la liste et comparer avec l'user connecter si c'est un admin ou pas */
  const userListe = useSelector(state => state.user.list)
  useEffect(() => {
  })
  const [showModal, setModal] = useState(false)
  const [bookEdit, setBookEdit] = useState({
    id: book.id,
    name: book.name,
    author: book.author,
    statut: book.statut
  })
  const handleClick = (e, book) => {
    if(book.statut === 'Disponible' || book.statut === 'Dispo'){
      dispatch(editBook({...book, id: book.id, name: book.name, author: book.author, statut: 'En pret' }))
      alert("Merci de rendre ce livre après lecture")
      history.push('/book')
    }else {
      alert("Ce livre n'est pas disponible")
    }
  }
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
      <CustomTable>
        <tr>
        <th>{i18n.t('author')}</th>
        <th>{i18n.t('title')}</th>
        <th>{i18n.t('status')}</th>
        <th>{i18n.t('edited')}</th>
        <th>{i18n.t('delete')}</th>
        <th>{i18n.t('borrow')}</th>
        </tr>

        {
          bookListe.map(book =>
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
                <td>
                  <IconButton onClick={e => handleClick(e, book)}>
                    <Logo url={(book.statut === 'Disponible') ? url2 : url3} top='10px' width='2rem'></Logo>
                  </IconButton>
                </td>
              </tr>
            ) : null
          )
        }
      </CustomTable>
    </BookContainer>
  )
}

const BookContainer = styled.div``

const CustomTable = styled.table`
  box-sizing: border-box;
  color: #24292e;
  font-weight: bold;
  line-height: 1.5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  width: 1180px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #f6f8fa;
  border-collapse: collapse;
  justify-content: center;
  th,
  td {
    border: 1px solid silver;
    text-align: center
  }
  th, 
  td, 
  tr {
    padding: 5px;
  }
  th {
    padding-bottom: 2.5%;
    padding-top: 2.5%;
  }
`

export default Books
