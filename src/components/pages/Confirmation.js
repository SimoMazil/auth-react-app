import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { confirm } from '../../actions/auth'


class Confirmation extends Component {

  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token)
    .then(() => this.setState({loading: false, success: true}))
    .catch(() => this.setState({loading: false, success: false}))
  }

  render() {
    const {loading, success} = this.state
    return (
      <div>

        {
          loading  && 
          <Message icon>
            <Icon name='circle notched' loading/>
            <Message.Header>Validating your email</Message.Header>
          </Message>
        }

        {
          !loading && success &&
          <Message success icon>
            <Icon name='checkmark'/>
            <Message.Content>
              <Message.Header>Thank you. Your account has been verified.</Message.Header>
              <Link to="/dashboard">Go to dashboard</Link>
            </Message.Content>
          </Message>
        }

        {!loading && !success && 
          <Message negative icon>
            <Icon name='warning sign'/>
            <Message.Header>Ooops, Invalide token.</Message.Header>
          </Message>
        }

      </div>
    )
  }
}

Confirmation.propTypes = {
  confirm: PropTypes.func.isRequired
}

export default connect(null, {confirm})(Confirmation);
