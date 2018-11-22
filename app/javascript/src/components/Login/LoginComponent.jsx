import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

export default class Login extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  redirectIfLoggedIn() {
    const {
      isUserLoggedIn,
      history,
    } = this.props;

    if (isUserLoggedIn) {
      history.push('/dashboard');
    }
  }

  render() {
    this.redirectIfLoggedIn();

    return (
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
          <CardBody>
            <CardTitle>Sign in</CardTitle>
            <CardText>You need to sign in with your GitHub account to activate Slack Hub Reminder bot.</CardText>
            <a href="/auth/github" className="btn btn-primary btn-lg btn-block">Sign in with GitHub</a>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};
