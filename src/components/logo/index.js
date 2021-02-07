import React from 'react'
import styled from 'styled-components'

const Logo = props => {
  return (
    <ImgComponent
      width={props.width}
      alt={props.alt}
      height={props.height}
      src={props.url}
      float={props.float}
      radius={props.radius}
      top={props.top}
      right={props.right}
    ></ImgComponent>
  )
}

const ImgComponent = styled.img`
  width: ${props => (props.width ? props.width : '150px')};
  height: ${props => (props.height ? props.height : '')};
  border-radius: ${props => (props.radius ? props.radius : '3px')};
  float: ${props => (props.float ? props.float : '')};
  padding-top: ${props => (props.top ? props.top : '')};
  margin-right: ${props => (props.right ? props.right : '')};
  color: red;
`

export default Logo
