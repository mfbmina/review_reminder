/* global document */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import createRootReducer from '../src/reducers';
import routes from '../src/routes';
import App from '../src/components/App';
import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';

const store = createStore(
  createRootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path={routes.login} component={Login} />
            <Route exact path={routes.dashboard} component={Dashboard} />
            <Route component={Login} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});
