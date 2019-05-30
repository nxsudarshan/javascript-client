/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {
  style,
  textStyle,
  errors,
  errorStyle,
} from './style';

const isError = {
  borderColor: 'red',
};
// eslint-disable-next-line no-unused-vars
export const TextField = (props) => {
  const { error, ...rest } = props;
  if (error) {
    newStyle = Object.assign(errors, style);
  } else {
    newStyle = style;
  }
  const { onChange } = props;
  return (

    onChange ? (
      <>
        <p style={textStyle}>{props.title}</p>
        <input {...rest} style={style} />
      </>
    ) :
      (
        <>
          <p style={textStyle}>There is no any Event on Input Field</p>
          <input {...rest} style={style} />
          {
            <span style={errorStyle}>{error}</span>
          }
        </>
      ));
};
