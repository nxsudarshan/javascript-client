import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { PrivateLayout } from '../layouts';
import { withStorage } from '../HOC';

export const PrivateRoute = (props) => {
  const {
    load,
    component: Component,
    ...rest
  } = props;

  if (!load('user')) {
    return (<Redirect to="/login" />);
  }

  return (
    <Route
      {...rest}
      render={matchedProps => (
        <PrivateLayout {...rest}>
          <Component {...matchedProps} />
        </PrivateLayout>
      )
      }
    />
  );
};

const WrappedComponent = withStorage(PrivateRoute);
export default WrappedComponent;
