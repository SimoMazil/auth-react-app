import React from 'react';
import { Message } from 'semantic-ui-react'

const ErrorMessage = props => {
  return (
    <Message negative>
      <Message.Header>{props.message}</Message.Header>
    </Message>
  )
}

export default ErrorMessage;
