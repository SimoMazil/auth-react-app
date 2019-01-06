import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

import ErrorMessage from '../messages/ErrorMessage';

class ResetPasswordForm extends Component {

  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfirmation: ''
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
      this.setState({
        loading: true
      })
      this.props.submit(this.state.data).catch(err => this.setState({
        errors: err.response.data.errors,
        loading: false
      }))
    }
  }

  Validator = data => {
    const errors = {}
    if(!data.password) errors.password = "Can't be blank";
    if(data.password !== data.passwordConfirmation) errors.passwordConfirmation = "password must match";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global  && <ErrorMessage message="Something went wrong" subMessage={errors.global}/>}
        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='New password'
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password  && <ErrorMessage message={errors.password}/>}
        </Form.Field>
        <Form.Field error={!!errors.passwordConfirmation}>
          <label htmlFor='password'>Password Confirmation</label>
          <input
            type='password'
            id='passwordConfirmation'
            name='passwordConfirmation'
            placeholder='Confirm new password'
            value={data.passwordConfirmation}
            onChange={this.onChange}
          />
          {errors.passwordConfirmation  && <ErrorMessage message={errors.passwordConfirmation}/>}
        </Form.Field>
        <Button primary floated='right'>Forget Password</Button>
      </Form>
    )
  }
}

export default ResetPasswordForm;
