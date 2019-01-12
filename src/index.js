import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import decode from 'jwt-decode';

import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './App';

import rootReducer from './RootReducer'
import { userLoggedIn } from './actions/auth'

import setAutorizationHeader from './utils/setAuthorizationHeader'

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.authToken) {
  const payload = decode(localStorage.authToken)
  const user = {token: localStorage.authToken, email: payload.email, confirmed: payload.confirmed}
  setAutorizationHeader(localStorage.authToken)
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(<BrowserRouter>
                  <Provider store={store}>
                    <Route component={App} />
                  </Provider>
                </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
