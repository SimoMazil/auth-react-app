import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

import ErrorMessage from '../messages/ErrorMessage';

class LoginForm extends Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  })

  onSubmit = () => {
    const errors = this.Validator(this.state.data)
    this.setState({errors})
    if(Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
    }
  }

  Validator = data => {
    const errors = {}
    if(!Validator.isEmail(data.email)) errors.email = "Invalide Email";
    if(!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='ex@ex.com'
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email  && <ErrorMessage message={errors.email}/>}
        </Form.Field>
        <Form.Field error={!errors.email && !!errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Make It Secure'
            value={data.password}
            onChange={this.onChange}
          />
          {!errors.email && errors.password  && <ErrorMessage message={errors.password}/>}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    )
  }
}

export default LoginForm;
