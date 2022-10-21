import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {GoogleOAuthProvider} from '@react-oauth/google'
import './index.css';
import App from './App';

import reducers from './reducers'

const store=createStore(reducers,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_API_TOKEN='473470220673-hctepgu1c1psm03q4iqncqk3ogm7cj25.apps.googleusercontent.com'
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={GOOGLE_API_TOKEN}>
      <App/>
    </GoogleOAuthProvider>
    </Provider>
);

