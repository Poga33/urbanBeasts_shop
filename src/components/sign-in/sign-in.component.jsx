import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// FIREBASE SIGN-IN WITH GOOGLE
import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput
            handleChange={ this.handleChange }
            name="email"
            type="email"
            label="email"
            value={ this.state.email }
            required
          />

          <FormInput
            handleChange={ this.handleChange }
            name="password"
            type="password"
            label="password"
            value={ this.state.password }
            required
          />

          <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="submit"
              onClick={ signInWithGoogle }
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;