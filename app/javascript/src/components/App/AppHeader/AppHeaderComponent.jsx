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

export default class AppHeaderComponent extends Component {
  isDashboard() {
    const {
      location: { pathname },
    } = this.props;

    return pathname === '/dashboard' ? true : false;
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
        <NavbarBrand href="/">Slack Hub Reminder</NavbarBrand>

        <Nav navbar>
          { this.isDashboard() &&
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
