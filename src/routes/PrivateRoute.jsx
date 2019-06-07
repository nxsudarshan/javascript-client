import React from 'react';
import {
  Route,
} from 'react-router-dom';

import { PrivateLayout } from '../layouts';

export class PrivateRoute extends React.Component {
  render() {
    const privateRiteOutput = [
      <>
        <Route path="/" component={PrivateLayout} />
      </>,
    ];
    return privateRiteOutput;
  }
}
