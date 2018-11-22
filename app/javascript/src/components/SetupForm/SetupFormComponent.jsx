import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Input,
  Button,
  Col,
} from 'reactstrap';

export default class SetupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      disabled: true,
    };
  }

  componentWillMount() {
    const { fetchRepositories } = this.props;

    fetchRepositories();
  }

  onChange(e) {
    const {
      target: { value },
    } = e;

    const empty = value.length === 0;

    this.setState({ selected: value });
    this.setState({ disabled: empty });
  }

  onSubmit(e) {
    e.preventDefault();

    const { submit, nextStep } = this.props;
    const { selected } = this.state;

    submit(selected);
    nextStep();
  }

  renderSelect() {
    const { repositories } = this.props;

    const { disabled } = this.state;

    return (
      <Fragment>
        <FormGroup>
          <Col sm={6} className="mx-auto">
            <Input
              type="select"
              name="select"
              onChange={(e) => { this.onChange(e); }}
            >
              <option value="">Choose a repository</option>
              {
                repositories.map(k => <option key={k.id} value={k.id}>{k.full_name}</option>)
              }
            </Input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Button
            outline
            color="info"
            onClick={() => {}}
          >
            Re-sync repositories
          </Button> { ' ' }
          <Button
            type="submit"
            color="primary"
            disabled={disabled}
          >
            Proceed
          </Button>
        </FormGroup>
      </Fragment>
    );
  }

  render() {
    return (
      <Form onSubmit={(e) => { this.onSubmit(e); }}>
        <div className="mx-auto">
          { this.renderSelect() }
        </div>
      </Form>
    );
  }
}

SetupForm.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      full_name: PropTypes.string,
    }),
  ).isRequired,
  submit: PropTypes.func.isRequired,
};
