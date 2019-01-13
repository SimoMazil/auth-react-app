import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import gravatarUrl from 'gravatar-url';
import {allBooksSelector} from '../../reducers/books'

const TopNavigation = ({ user, logout, hasBooks }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
    {
      hasBooks && <Menu.Item as={Link} to='/books/new'>Add New Book</Menu.Item>
    }
    <Menu.Menu position="right">
      <Dropdown trigger={user.email && <Image avatar src={gravatarUrl(user.email)}/>}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

function mapStateToProps(state) {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  }
}

export default connect(mapStateToProps, { logout })(TopNavigation);
