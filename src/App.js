import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App;
