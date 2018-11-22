import { connect } from 'react-redux';

import SetupForm from './SetupFormComponent';

import { fetchRepositories } from '../../actions';

const mapStateToProps = ({ repositories: { repositories } }) => ({
  repositories,
});

const mapDispatchToProps = dispatch => ({
  fetchRepositories() {
    dispatch(fetchRepositories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupForm);
