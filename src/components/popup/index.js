import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import BookForm from '../bookForm'

export const Modal = ({ showModal, setModal, bookEdit, setBookEdit }) => {
  return (
    <>
      {showModal ? (
        <Background>
          {
            <ModalWrapper>
              <ModalContent>
                <div showModal={showModal}>
                  <BookForm
                    visible='true'
                    bookEdit={bookEdit}
                    setBookEdit={setBookEdit}
                  ></BookForm>
                  <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setModal(prev => !prev)}
                  />
                </div>
              </ModalContent>
            </ModalWrapper>
          }
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 60%;
  background: transparent;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 600px;
  min-height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

export default Modal
