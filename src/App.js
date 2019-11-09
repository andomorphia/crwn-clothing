import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  unsuscribeFromAuth = null

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state

    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </>
    )
  }
}

export default App
