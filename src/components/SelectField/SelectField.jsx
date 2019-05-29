/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
// import { style, textStyle } from './style';
// eslint-disable-next-line react/prefer-stateless-function
export class SelectField extends React.Component {
  render() {
    const {
      options,
    } = this.props;
    return (options.map((item) => { console.log(item.label, item.value); }));

    // <>
    //     <select {...rest}>
    //       <option disabled selected>{value}</option>
    //       {
    //         options.map((item) => { <><option value={item.label}>{item.value}</option></>; })
    //       }
    //     </select>
    //   </>
  }
}
