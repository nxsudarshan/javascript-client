/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { style, textStyle } from './style';
// eslint-disable-next-line react/prefer-stateless-function
export class SelectField extends React.Component {
  render() {
    const {
      title,
      options,
      ...rest
    } = this.props;
    const items = Object.keys(options.Games);
    return (
      <>
        <p style={textStyle}>{title}</p>
        <select {...rest} style={style}>
          <option selected disabled>Select</option>
          {
            items.map(item => <option value={item} title={item}>{item}</option>)
          }
        </select>
      </>
    );
  }
}
