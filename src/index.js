import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap-grid.css';
import {AuthenticationProvider} from "./context"
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(  
  <React.StrictMode>
    <AuthenticationProvider>
      <Router>
        <App />
      </Router>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

