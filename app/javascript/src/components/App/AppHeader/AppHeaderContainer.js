import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppHeader from './AppHeaderComponent';

import { handleLogout } from '../../../actions/user';

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  handleLogout() {
    dispatch(handleLogout());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader));
