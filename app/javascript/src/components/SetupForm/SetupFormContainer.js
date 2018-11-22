import { connect } from 'react-redux';

import SetupForm from './SetupFormComponent';

import {
  fetchRepositories,
  syncRepositories
} from '../../actions';

const mapStateToProps = ({ repositories: { repositories } }) => ({
  repositories,
});

const mapDispatchToProps = dispatch => ({
  fetchRepositories() {
    dispatch(fetchRepositories());
  },
  syncRepositories() {
    dispatch(syncRepositories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupForm);
