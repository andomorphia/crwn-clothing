import React, { Component } from 'react'

import { signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
