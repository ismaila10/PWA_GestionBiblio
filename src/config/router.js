import React from 'react'
import styled from 'styled-components'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'
import Header from '../screens/header'
import Book from '../screens/book'
import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Router>
      <BlocHead>
        <Header></Header>
      </BlocHead>
      

      <Switch>
        <Route exact path='/' component={Login}></Route>
        <PrivateRoute path='/home' component={Home}></PrivateRoute>
        <PrivateRoute path='/book' component={Book}></PrivateRoute>
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

const BlocHead = styled.div`
  animation-duration: 4s;
  animation-name: glissement;
  animation-iteration-count: 1;
  @keyframes glissement {
    from {
      margin-left: 100%;
      width: 300%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`

export default Routes
