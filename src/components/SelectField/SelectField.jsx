/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { style, textStyle } from './style';
import { Constants } from '../../configs/constants';
// eslint-disable-next-line react/prefer-stateless-function
export class SelectField extends React.Component {
  render() {
    const items = Object.keys(Constants.Games);
    const { title, ...rest } = this.props;
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
