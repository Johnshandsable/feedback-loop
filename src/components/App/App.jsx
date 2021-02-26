import React from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FormPageOne from '../FormPageOne/FormPageOne';
import FormPageTwo from '../FormPageTwo/FormPageTwo';
import FormPageThree from '../FormPageThree/FormPageThree';
import FormPageFour from '../FormPageFour/FormPageFour';
import FormPageFive from '../FormPageFive/FormPageFive';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Switch>
          {/* Feedback Form - Page One */}
          <Route path="/" component={FormPageOne} exact />
          {/* Feedback Form - Page Two */}
          <Route path="/form2" component={FormPageTwo} />
          {/* Feedback Form - Page Three */}
          <Route path="/form3" component={FormPageThree} />
          {/* Feedback Form - Page Four */}
          <Route path="/form4" component={FormPageFour} />
          {/* Feedback Form - Page Five */}
          <Route path="/form5" component={FormPageFive} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
