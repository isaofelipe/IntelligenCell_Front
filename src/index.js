import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Dashboard from './Dashboard';
import Free from './Free';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/free/" component={Free} />
      </Switch>
    </ BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
