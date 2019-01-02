import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropsTypes from 'prop-types';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
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
          <GuestRoute location={location} path="/login" component={Login} />
          <GuestRoute location={location} path="/signup" component={Signup} />
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
