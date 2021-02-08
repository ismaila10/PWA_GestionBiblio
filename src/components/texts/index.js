import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  color: green;
`
export const UserName = styled.span`
  float: right;
  color: green;
  font-weight: bolder;
  font-size: 18px;
`

export const Linked = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  &:hover {
    color: green;
  }
  
`

export const ButtonClick = styled.button`
cursor: pointer;
margin-left: 45%;
width: 90px;
height: 35px;
align-item: center;
border-radius: 18px
border: 1px solid green;
color: green;
background-color: transparent;
&:hover {
  color: white;
  background-color: green;
}
`

export const IconButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`

export const ChangeTheme = styled.button`
  cursor: pointer;
  float: right;
  border-color: transparent;
  background-color: transparent;
`
