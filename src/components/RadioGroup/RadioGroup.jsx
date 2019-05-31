/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React from 'react';
import { textStyle } from './style';

export class RadioGroup extends React.Component {
  render() {
    const {
      value,
      onChange,
      options,
    } = this.props;
    return (
      options.map(item => (
        <div>
          <input
            type="radio"
            value={item.label}
            name={value}
            checked={value === item.value}
            id={item.value}
            onChange={onChange}
          />
          <label style={textStyle} htmlFor={item.value} c>{item.label}</label>
        </div>
      ))
    );
  }
}
