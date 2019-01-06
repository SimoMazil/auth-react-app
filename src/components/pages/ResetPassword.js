import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import ResetPasswordForm from '../forms/ResetPasswordForm';
import { validateToken, resetPassword } from '../../actions/auth';

class ResetPassword extends Component {

  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props.validateToken(this.props.match.params.token)
    .then(() => this.setState({loading: false, success: true}))
    .catch(() => this.setState({loading: false, success: false}))
  }

  submit = data => this.props.resetPassword(data).then(() => this.props.history.push("/login"))

  render() {
    const {loading, success} = this.state
    const token = this.props.match.params.token
    return (
      <div style={{margin: '100px auto', width: '500px'}}>
        <h3 style={{textAlign: 'center'}}>Reset Password</h3>
        {loading && !success && <Message>Loading...</Message>}
        {!loading && success && <Message><ResetPasswordForm submit={this.submit} token={token} /></Message>}
        {!loading && !success && <Message>Invalide Token</Message>}
      </div>
    )
  }
}

export default connect(null, {validateToken, resetPassword})(ResetPassword);
