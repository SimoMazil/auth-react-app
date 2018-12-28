import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const ErrorMessage = props => {
  return (
    <Message negative>
      <Message.Header>{props.message}</Message.Header>
      {
        props.subMessage && <p>{props.subMessage}</p>
      }
    </Message>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage;
