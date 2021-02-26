import React from 'react';
import axios from 'axios';
import './App.css';

import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import FormPageOne from '../FormPageOne/FormPageOne';
import FormPageTwo from '../FormPageTwo/FormPageTwo';

import Home from '../Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FormPageOne />

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Route path="/home">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
