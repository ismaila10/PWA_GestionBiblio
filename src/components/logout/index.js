import React from 'react'
import styled from 'styled-components'
import Logo from '../logo'
import url from "../../assets/logout1.jpg";

const Logout = ({ handleClick }) => {
  return <LogoutButton onClick={handleClick}><Logo url={url} width="25px"></Logo></LogoutButton>
}

const LogoutButton = styled.button`
  display: flex;
  cursor: pointer;
  margin-top: 4%;
  border: none;
  border-radius: 3px;
  color: red;
  background-color: transparent;
  float: right;
  &:hover {
    background-color: white;
  }
`

export default Logout
