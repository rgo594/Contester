import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <ActionCableProvider url='ws://localhost:3000/cable'>
    <App />
  </ActionCableProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
