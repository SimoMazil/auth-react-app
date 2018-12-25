import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    error: {}
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  })

  onSubmit = () => {

  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='ex@ex.com'
            value={this.state.data.email}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='MakeItSecure'
            value={this.state.data.password}
          />
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    )
  }
}

export default LoginForm;
