import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Alert,
  Button
} from 'reactstrap';

export default class Success extends Component {
  componentDidMount() {
    const { fetchRepository } = this.props;

    fetchRepository();
  }
  render() {
    const {
      repositories: {
        full_name,
        slack_data: { team_name } = {},
      },
    } = this.props;

    return (
      <Col md={{ size: 8, offset: 2 }}>
        <Alert color="success">
          <h4 className="alert-heading">Well done!</h4>
          From now on, your channel will be notified when there are reviews requested.
        </Alert>

        <div className="text-center">
          <a href={`https://${team_name}.slack.com`} target="_blank" className="btn btn-outline-primary">Open Slack</a>{' '}
          <a href={`https://github.com/${full_name}/pulls`} target="_blank" className="btn btn-success">Add reviewer to a pull request</a>
        </div>
      </Col>
    );
  }
}

Success.propTypes = {
  fetchRepository: PropTypes.func.isRequired,
  // repositories: PropTypes.shape({
  //   full_name: PropTypes.string.isRequired,
  //   slack_data: PropTypes.shape({
  //     team_name: PropTypes.string.isRequired,
  //   }),
  // }),
}
