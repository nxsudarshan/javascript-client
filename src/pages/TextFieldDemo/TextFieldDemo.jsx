/* eslint-disable no-use-before-define */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { TextField } from '../../components';
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-sequences
// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line no-sequences
// eslint-disable-next-line no-unused-expressions
export const TextFieldDemo = () => (
  <>
    <p style={textStyle}>This is a Disabled Input</p>
    <TextField value="This is a Disabled Input" error={false} disabled />
    <p style={textStyle}>A Valid Input</p>
    <TextField value="Accessible" error={false} />
    <p style={textStyle}>An Input with errors</p>
    <TextField value="101" error="Could not be greater than" />
  </>
);
export const textStyle = {
  marginBottom: '1px',
  padding: '10px',
  fontWeight: 'bold',
};
