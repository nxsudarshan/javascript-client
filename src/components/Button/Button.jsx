/* eslint-disable react/style-prop-object */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-const-assign */
import React from 'react';
import { greenButton } from './style';

const buttonStyle = {
  float: 'right',
};
export class Button extends React.Component {
  render() {
    const {
      value,
      disabled,
      style,
      ...rest
    } = this.props;
    const newStyle = !disabled && value === 'Submit' ? Object.assign({ ...style }, greenButton) : { ...style };
    // Props
    // * color (default: ‘default’, or ‘primary’)
    // * disabled (boolean, default: false)
    // * style (default {}, and must only accept object of strings)
    // * value (string and must be required)
    // * onClick (function and must be required)
    const buttonResult = [
      <div style={buttonStyle}>
        <input type="button" value={value} style={newStyle} {...rest} disabled={disabled} />
      </div>,
    ];
    return buttonResult;
  }
}
