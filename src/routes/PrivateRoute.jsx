import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { PrivateLayout } from '../layouts';

export class PrivateRoute extends React.Component {
  render() {
    const privateRiteOutput = [
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PrivateLayout} />
          </Switch>
        </BrowserRouter>
      </>,
    ];
    return privateRiteOutput;
  }
}
