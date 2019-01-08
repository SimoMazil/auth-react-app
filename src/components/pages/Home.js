import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Home = ({ isAuth, logout }) => (
  <div>
    <h3>Home</h3>

    { isAuth ? "" : 
    <p><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link></p> }
  </div>
)

Home.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout })(Home);
