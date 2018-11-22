import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

const locationHelper = locationHelperBuilder({});

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state => state.user.user !== null,
  wrapperDisplayName: 'UserIsAuthenticated',
};

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults);

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  redirectPath: '/login',
});

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: state => state.user.user === null,
  wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults);

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
});
