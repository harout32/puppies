import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { LandingPage } from '../pages/ladning-page';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
    </Switch>
  </Router>
);
