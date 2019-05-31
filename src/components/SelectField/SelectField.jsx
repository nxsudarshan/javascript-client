/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { style, textStyle } from './style';
// eslint-disable-next-line react/prefer-stateless-function
export class SelectField extends React.Component {
  render() {
    const {
      options,
      value,
      onChange,
      title,
      ...rest
    } = this.props;
    return (
      <>
        <p style={textStyle}>{title}</p>
        <select {...rest} style={style} onChange={onChange}>
          <option disabled selected>Select</option>
          {
            options.map(item => <option value={item.label}>{item.value}</option>)
          }
        </select>
      </>
    );
  }
}
