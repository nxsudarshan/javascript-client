/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
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
