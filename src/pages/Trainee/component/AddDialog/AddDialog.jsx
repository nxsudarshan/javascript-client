/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { AddDialogComponent } from '../../../../components';

export class AddDialog extends React.Component {
  render() {
    const state = {
      name: '',
      email: '',
      password: '',
    };
    const result = [
      <>
        <AddDialogComponent open onClose onSubmit={state} />
      </>,
    ];
    return result;
  }
}
