/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { TableComponent } from '../../components';
import { traineeData } from '../Trainee';

export class TableDemo extends React.Component {
  render() {
    return (
      <TableComponent
        id="id"
        columns={[
          {
            field: 'name',
            label: 'Name',
            align: 'center',
          },
          {
            field: 'email',
            label: 'Email Address',
          },
        ]}
        data={traineeData}
      />
    );
  }
}
