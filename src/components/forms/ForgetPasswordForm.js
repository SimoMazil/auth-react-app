import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

import ErrorMessage from '../messages/ErrorMessage';

class ForgetPasswordForm extends Component {

  state = {
    data: {
      email: ''
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
    if(!Validator.isEmail(data.email)) errors.email = "Invalide Email";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global  && <ErrorMessage message="Something went wrong" subMessage={errors.global}/>}
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
        <Button primary floated='right'>Forget Password</Button>
      </Form>
    )
  }
}

export default ForgetPasswordForm;
