import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
} from 'reactstrap';

import AppHeader from './AppHeader';

export default class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <AppHeader />

        <Container>
          <Row>
            {children}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  fetchUser: PropTypes.func.isRequired,
};
