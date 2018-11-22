import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './AppComponent';

import { fetchUser } from '../../actions';

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    dispatch(fetchUser());
  },
});

export default withRouter(connect(() => ({}), mapDispatchToProps)(App));
