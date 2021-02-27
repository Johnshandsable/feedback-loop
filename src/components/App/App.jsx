import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Material UI
import { Typography, AppBar, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, teal } from '@material-ui/core/colors';

// Custom Components
import FormPageOne from '../FormPageOne/FormPageOne';
import FormPageTwo from '../FormPageTwo/FormPageTwo';
import FormPageThree from '../FormPageThree/FormPageThree';
import FormPageFour from '../FormPageFour/FormPageFour';
import FormPageFive from '../FormPageFive/FormPageFive';

function App() {
  const darkCyan = cyan['A700'];

  const customTheme = createMuiTheme({
    // theme settings
    palette: {
      // type: 'dark',
      primary: {
        // light: '',
        // main: '',
        main: darkCyan,
        // dark: '',
        // contrastText: '',
      },
      secondary: teal,
    },
    overrides: {
      borderRadius: '0',
      border: '2px solid #333333',
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar>
        <Typography align="center" variant="h2">
          Feedback
        </Typography>
        <Typography align="center" variant="h6">
          Don't forget it!
        </Typography>
      </AppBar>

      <div className="appForm">
        <Router>
          <Switch>
            {/* Feedback Form - Page One */}
            <Route path="/" component={FormPageOne} exact />
            {/* Feedback Form - Page Two */}
            <Route path="/form2" component={FormPageTwo} exact />
            {/* Feedback Form - Page Three */}
            <Route path="/form3" component={FormPageThree} exact />
            {/* Feedback Form - Page Four */}
            <Route path="/form4" component={FormPageFour} exact />
            {/* Feedback Form - Page Five */}
            <Route path="/form5" component={FormPageFive} exact />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
