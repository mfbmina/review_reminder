import React, { Component } from 'react';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Button,
  Alert,
} from 'reactstrap';

import SetupForm from '../SetupForm';

export default class DashboardComponent extends Component {
  constructor() {
    super();

    this.nextStep = this.nextStep.bind(this);
    this.saveRepositoryId = this.saveRepositoryId.bind(this);

    this.state = {
      step: 1,
      repositoryId: null,
    };
  }

  saveRepositoryId(repositoryId) {
    this.setState({ repositoryId });
  }

  nextStep() {
    const { step } = this.state;
    const nextStep = step + 1;

    this.setState({ step: nextStep });
  }

  configure() {
    return (
      <div className="text-center">
        <b>Choose a GitHub repository</b>
        <p>
          You will first pick a GitHub repository in order to receive review<br />
          notifications directly to a Slack channel of your choice.
        </p>

        <SetupForm
          nextStep={this.nextStep}
          submit={this.saveRepositoryId}
        />
      </div>
    );
  }

  addToSlack() {
    const { repositoryId } = this.state;

    return (
      <div className="text-center">
        <b>Authorize access to your Slack workspace</b>
        <p>
          Authorize Slack Hub Reminder on your Slack workspace<br />
          and then pick a channel to receive notifications.
        </p>

        <a
          href={`https://slack.com/oauth/authorize?client_id=487296529927.485508548240&scope=chat:write:bot,incoming-webhook,bot&redirect_uri=https://review-reminder.herokuapp.com/repositories/${repositoryId}/slack`}
        >
          <img
            alt="Add to Slack"
            height="40"
            width="139"
            src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>
      </div>
    );
  }

  manageSteps() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return this.configure();
      case 2:
        return this.addToSlack();
      default:
        return this.configure();
    }
  }

  render() {
    return (
      <Col>
        <Card>
          <CardHeader>
            <Nav tabs card>
              <NavItem>
                <NavLink href="#" active>Activation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" disabled>Settings</NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            {
              this.manageSteps()
            }
          </CardBody>
        </Card>
      </Col>
    );
  }
}
