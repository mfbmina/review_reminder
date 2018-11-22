import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Routes from '../../../routes';

export default class AppHeaderComponent extends Component {
  isLoginPage() {
    const {
      match: { path },
    } = this.props;

    return path === Routes.login ? true : false;
  }

  handleLogout() {
    const { handleLogout } = this.props;

    handleLogout();
  }

  render() {
    return (
      <Navbar
        fixed="top"
        color="light"
        expand
      >
        <NavbarBrand href={Routes.login}>Slack Hub Reminder</NavbarBrand>

        <Nav navbar>
          { !this.isLoginPage() &&
            (
              <NavItem>
                <NavLink href="#" onClick={() => { this.handleLogout(); }}>Logout</NavLink>
              </NavItem>
            )
          }
        </Nav>
      </Navbar>
    );
  }
}

AppHeaderComponent.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
