import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Material UI
import {
  Typography,
  AppBar,
  Container,
  Paper,
  Grid,
  GridItem,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, teal } from '@material-ui/core/colors';

// Custom Components
import AdminPage from '../AdminPage/AdminPage';
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
      MuiButton: {
        outlined: {
          boxShadow: '3px 3px 0 #014F56',
          '&:hover': {
            boxShadow: '1px 1px 0 #014F56',
          },
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: '#dfe6e9',
          border: '2px solid #333333',
          borderRadius: '0',
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Grid container direction="column" justify="center" alignItems="center">
        <AppBar>
          <Typography align="center" variant="h2">
            Feedback
          </Typography>
          <Typography align="center" variant="h6">
            Don't forget it!
          </Typography>
        </AppBar>
      </Grid>

      {/* <Grid container direction="column" justify="center" alignItems="center"> */}
      <div className="appForm">
        <Grid item xs={12}>
          <Paper>
            <Router>
              <Switch>
                {/* Admin Page */}
                <Route path="/admin" component={AdminPage} exact />
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
          </Paper>
        </Grid>
      </div>
      {/* </Grid> */}
    </ThemeProvider>
  );
}

export default App;
