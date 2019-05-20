/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Slider } from '../../components';

// eslint-disable-next-line react/require-render-return
// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line react/require-render-return
// eslint-disable-next-line react/prefer-stateless-function
export class SliderDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line no-unused-expressions
    return <Slider alt="default.png" />;
  }
}
