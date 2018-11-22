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

import routes from '../../../routes';

export default class AppHeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  isActive(current) {
    const {
      location: { pathname },
    } = this.props;

    return (pathname === current);
  }

  isLoginPage() {
    const {
      location: { pathname },
    } = this.props;

    if (pathname === routes.login) {
      return true;
    }

    return false;
  }

  handleLogout() {
    const { handleLogout } = this.props;

    handleLogout();
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar
        fixed="top"
        color="light"
        expand
      >
        <NavbarBrand href={routes.login}>Slack Hub Reminder</NavbarBrand>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            { !this.isLoginPage() &&
              (
                <NavItem>
                  <NavLink href="#" onClick={() => { this.handleLogout(); }}>Logout</NavLink>
                </NavItem>
              )
            }
          </Nav>
        </Collapse>
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
