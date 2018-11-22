import { connect } from 'react-redux';

import App from './AppComponent';

import { fetchUser } from '../../actions';

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    dispatch(fetchUser());
  },
});

export default connect(() => ({}), mapDispatchToProps)(App);
