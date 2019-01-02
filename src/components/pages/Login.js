import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class Login extends Component {

  submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"))

  render() {
    return (
      <div>
        <h3>Login</h3>

        <LoginForm submit={this.submit}/>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, {login})(Login);
