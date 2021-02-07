import React, {useRef, useEffect, useCallback} from 'react'
import { useSpring, animated } from "react-spring";
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import BookForm from '../bookForm'

export const Modal = ({ showModal, setModal, bookEdit, setBookEdit }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setModal(false);
      }
    },
    [setModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          {
            <animated.div style={animation}>
              <ModalWrapper>
                <ModalContent>
                  <div showModal={showModal}>
                    <BookForm
                      visible='true'
                      bookEdit={bookEdit}
                      setBookEdit={setBookEdit}
                      showModal={showModal}
                      setModal={setModal}
                    ></BookForm>
                    <CloseModalButton
                      aria-label='Close modal'
                      onClick={() => setModal(prev => !prev)}
                    />
                  </div>
                </ModalContent>
              </ModalWrapper>
            </animated.div>
            
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

const ModalImg = styled.p`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
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
