import { connect } from 'react-redux';

import Success from './SuccessComponent';

import { fetchRepository } from '../../actions';

const mapStateToProps = ({ repositories: { repositories } }) => ({
  repositories,
});

const mapDispatchToProps = (dispatch, { match: { params: { id } }}) => ({
  fetchRepository() {
    dispatch(fetchRepository(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);
