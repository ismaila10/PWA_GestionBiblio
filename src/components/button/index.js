import React from 'react'
import styled from 'styled-components'

const ButtonSubmit = props => {
  return (
    <SubmitButton
      left={props.left}
      width={props.width}
      height={props.height}
      type='submit'
    >
      {props.name}
    </SubmitButton>
  )
}

const SubmitButton = styled.button`
  font-family: inherit;
  margin: 9px 0px;
  margin-left: ${props => (props.left ? props.left : '0%')};
  height: ${props => (props.height ? props.height : '30px')};
  width: ${props => (props.width ? props.width : '100%')};
  border: solid;
  border-radius: 10px;
  background-color: #2ea44f;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: #2ea44f;
    border-color: #2ea44f;
  }
`

export default ButtonSubmit
