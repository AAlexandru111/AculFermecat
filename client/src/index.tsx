import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import App from '../src/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StoreProvider } from './context/StoreContext';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <StoreProvider>
      <App />
      </StoreProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
