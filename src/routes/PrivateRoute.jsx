/* eslint-disable react/prop-types */
import React from 'react';
import {
  Route,
} from 'react-router-dom';

import { PrivateLayout } from '../layouts';

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchedProps => (
        <PrivateLayout>
          <Component {...matchedProps} />
        </PrivateLayout>
      )
      }
    />
  );
};
