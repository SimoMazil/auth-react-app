import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropsTypes from 'prop-types';

import Home from './components/pages/Home';
import Confirmation from './components/pages/Confirmation';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ForgetPassword from './components/pages/ForgetPassword';
import ResetPassword from './components/pages/ResetPassword';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

class App extends Component {
  render() {
    const location = this.props.location
    return (
      <div className="ui container">
        <Switch>
          <Route location={location} path="/" component={Home} exact />
          <Route location={location} path="/confirmation/:token" component={Confirmation} exact />
          <GuestRoute location={location} path="/login" component={Login} />
          <GuestRoute location={location} path="/signup" component={Signup} />
          <GuestRoute location={location} path="/forgetPassword" component={ForgetPassword} />
          <GuestRoute location={location} path="/reset_password/:token" component={ResetPassword} />
          <UserRoute location={location} path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  location: PropsTypes.shape({
    pathname: PropsTypes.string.isRequired
  }).isRequired
}

export default App;
