import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { withStorage } from '../HOC';

import { AuthLayout } from '../layouts';

export const AuthRoute = (props) => {
  const { load, component: Component, ...rest } = props;
  if (load('user')) {
    return (<Redirect to="/trainee" />);
  }
  return (
    <Route
      {...rest}
      render={matchedProps => (
        <AuthLayout>
          <Component {...matchedProps} />
        </AuthLayout>
      )
      }
    />
  );
};

const WrappedComponent = withStorage(AuthRoute);
export default WrappedComponent;
