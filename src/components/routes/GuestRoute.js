import React from 'react'
import PropsTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const GuestRoute = ({isAuth, component: Component, ...rest}) => (
  <Route {...rest} render={props => 
    !isAuth ? <Component {...props} /> : <Redirect to="/dashboard" />
  } />
)

GuestRoute.propTypes = {
  component: PropsTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.user.token
  }
}

export default connect(mapStateToProps)(GuestRoute);