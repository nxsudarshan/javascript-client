import React from 'react';
import { AuthLayout } from '../layouts';

export class AuthRoute extends React.Component {
  render() {
    const authRouteOutput = [
      <>
        <AuthLayout />
      </>,
    ];
    return authRouteOutput;
  }
}
