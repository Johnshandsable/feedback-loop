import React from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FormPageOne from '../FormPageOne/FormPageOne';
import FormPageTwo from '../FormPageTwo/FormPageTwo';
import FormPageThree from '../FormPageThree/FormPageThree';

import Home from '../Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Switch>
          <Route path="/" component={FormPageOne} exact />
          <Route path="/form2" component={FormPageTwo} />
          <Route path="/form3" component={FormPageThree} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
