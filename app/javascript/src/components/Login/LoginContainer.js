import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './LoginComponent';

import { fetchUser } from '../../actions';

const mapStateToProps = ({ user }) => ({
  user,
  isUserLoggedIn: (user.user && user.user.id) ? true : false,
});

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    dispatch(fetchUser());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
