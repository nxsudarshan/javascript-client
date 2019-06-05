/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import { TableComponent } from '../../components';
import { traineeData } from '../Trainee';
import { dateFormat } from '../../configs/constants';

export class TableDemo extends React.Component {
  page = 0;

  count = 100;

  state = {
    order: '',
    orderBy: '',
  }

  stringToUpperCase = value => value && value.toUpperCase();

  getFormattedDate = date => moment(date).format(dateFormat);

  handleChange = (orderDetails) => {
    this.setState({ ...orderDetails });
  }

  handlerEditDialogOpen = () => {

  }

  handlerDeleteDialogOpen = () => {

  }

  handleSelect = (e) => {
    console.log(e);
  }

  render() {
    const { order, orderBy } = this.state;
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
            format: this.stringToUpperCase,
          },
          {
            field: 'createdAt',
            label: 'Date',
            format: this.getFormattedDate,
            align: 'right',
          },
        ]}
        data={traineeData}
        order={order}
        orderBy={orderBy}
        onSort={this.handleChange}
        onSelect={this.handleSelect}
        actions={[
          {
            icon: <Edit />,
            handler: this.handlerEditDialogOpen,
          },
          {
            icon: <Delete />,
            handler: this.handlerDeleteDialogOpen,
          },
        ]}
        count={this.count}
        page={this.page}
        onChangePage={this.handleChangePage}
      />
    );
  }
}
