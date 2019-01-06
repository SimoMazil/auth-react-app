import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import ForgetPasswordForm from '../forms/ForgetPasswordForm';
import { resetPasswordRequest } from '../../actions/auth';

class ForgetPassword extends Component {

  state = {
    success: false
  }

  submit = data => this.props.resetPasswordRequest(data).then(() => this.setState({success: true}))

  render() {
    const  {success} = this.state
    return (
      <div style={{margin: '100px auto', width: '500px'}}>
        <h3 style={{textAlign: 'center'}}>Forget Password</h3>
        {success ? <Message>Email has been sent.</Message> : <ForgetPasswordForm submit={this.submit}/>}
      </div>
    )
  }
}

ForgetPassword.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}

export default connect(null, {resetPasswordRequest})(ForgetPassword);
