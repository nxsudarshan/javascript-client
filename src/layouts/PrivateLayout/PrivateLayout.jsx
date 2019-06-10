import React from 'react';
import { Navbar } from '../index';

export class PrivateLayout extends React.Component {
  render() {
    const { children } = this.props;
    const privateLayoutOutput = [
      <>
        <Navbar />
        {children}
      </>,
    ];
    return privateLayoutOutput;
  }
}
