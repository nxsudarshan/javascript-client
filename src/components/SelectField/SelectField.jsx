/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { style, textStyle } from './style';

const isError = {
  borderColor: 'red',
};
// eslint-disable-next-line react/prefer-stateless-function
export class SelectField extends React.Component {
  render() {
    const {
      title,
      options,
      isTouched,
      borderColor,
      ...rest
    } = this.props;
    const newStyle = !isTouched ? Object.assign({ ...style }, isError) : { ...style };
    const items = Object.keys(options.Games);
    return (
      <>
        <p style={textStyle}>{title}</p>
        <select {...rest} style={newStyle}>
          <option selected disabled>Select</option>
          {
            items.map(item => <option value={item} title={item}>{item}</option>)
          }
        </select>
      </>
    );
  }
}
