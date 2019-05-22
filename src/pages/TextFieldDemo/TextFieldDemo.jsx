/* eslint-disable no-use-before-define */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { TextField } from '../../components';

export const TextFieldDemo = () => (
  <>
    <p style={textStyle}>This is a Disabled Input</p>
    <TextField type="text" value="This is a Disabled Input" error={false} disabled />
    <p style={textStyle}>A Valid Input</p>
    <TextField type="text" value="Accessible" error={false} />
    <p style={textStyle}>An Input with errors</p>
    <TextField type="text" value="101" error="Could not be greater than" />
  </>
);
export const textStyle = {
  marginBottom: '1px',
  padding: '10px',
  fontWeight: 'bold',
};
