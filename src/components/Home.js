import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>

        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Home;
