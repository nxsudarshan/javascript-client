/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-const-assign */
import React from 'react';

export class Button extends React.Component {
  render() {
    const greenButton = {
      backgroundColor: 'green',
    };
    const {
      disabled,
      isTouched,
      style,
      ...rest
    } = this.props;
    const newStyle = isTouched ? Object.assign({ ...style }, greenButton) : { ...style };
    // Props
    // * color (default: ‘default’, or ‘primary’)
    // * disabled (boolean, default: false)
    // * style (default {}, and must only accept object of strings)
    // * value (string and must be required)
    // * onClick (function and must be required)
    const buttonResult = [
      <>
        <input type="button" style={newStyle} {...rest} disabled={!disabled} />
      </>,
    ];
    return buttonResult;
  }
}
