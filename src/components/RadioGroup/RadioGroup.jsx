/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';

import { textStyle } from './style';

export class RadioGroup extends React.Component {
  render() {
    const {
      value,
      onClick,
      options,
      onFocus,
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
            onClick={onClick}
            onFocus={onFocus}
          />
          <label
            style={textStyle}
            htmlFor={item.value}
          >
            {item.label}
          </label>
        </div>
      ))
    );
  }
}
