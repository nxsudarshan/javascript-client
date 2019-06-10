import React from 'react';
import { Navbar } from '../index';

export class PrivateLayout extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    const privateLayoutOutput = [
      <>
        <Navbar {...rest} />
        {children}
      </>,
    ];
    return privateLayoutOutput;
  }
}
