import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Alert,
  Button
} from 'reactstrap';

export default class Success extends Component {
  render() {
    return (
      <Col md={{ size: 8, offset: 2 }}>
        <Alert color="success">
          <h4 className="alert-heading">Well done!</h4>
          From now on, your channel will be notified when there are reviews requested.
        </Alert>

        <div className="text-center">
          <Button outline color="primary">Open Slack</Button>{' '}
          <Button color="success">Add reviewer to a pull request</Button>
        </div>
      </Col>
    );
  }
}
