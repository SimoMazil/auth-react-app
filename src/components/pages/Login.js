import React, { Component } from 'react';

import LoginForm from '../forms/LoginForm'

class Login extends Component {

  submit = data => {
    console.log("form data: ", data)
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        <LoginForm submit={this.submit}/>
      </div>
    )
  }
}

export default Login;
