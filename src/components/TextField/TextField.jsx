/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { style, textStyle, errors } from './style';

// eslint-disable-next-line no-unused-vars
let newStyle;
export const TextField = (props) => {
  const { error, ...rest } = props;
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line no-use-before-define
  if (error) {
    newStyle = Object.assign(errors, style);
  } else {
    // eslint-disable-next-line no-self-assign
    newStyle = style;
  }
  // eslint-disable-next-line no-return-assign
  return (
    <>
      <input
        type="text"
        style={newStyle}
        {...rest}
      />
      {
        // eslint-disable-next-line no-const-assign
        <span style={textStyle}>{error}</span>
      }

    </>
  );
};
