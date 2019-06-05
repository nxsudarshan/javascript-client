/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import { TableComponent } from '../../components';
import { EditDialog } from '../Trainee/component';
import { traineeData } from '../Trainee';
import { dateFormat } from '../../configs/constants';

export class TableDemo extends React.Component {
  page = 0;

  count = 100;

  state = {
    order: '',
    orderBy: '',
    open: false,
  }

  stringToUpperCase = value => value && value.toUpperCase();

  getFormattedDate = date => moment(date).format(dateFormat);

  handleChange = (orderDetails) => {
    this.setState({ ...orderDetails });
  }

  editDialog = (row) => {
    const { open } = this.state;
    const editDialogOutput = [
      <EditDialog open={open} handleClose={this.handleCloseDialog} data={row} />,
    ];
    return editDialogOutput;
  }

  handleCloseDialog = () => {
    this.setState({
      open: false,
    });
  }

  handlerEditDialogOpen = (row) => {
    console.log(row);
    // this.setState({
    //   open: true,
    // });
    // () => this.editDialog(row);
  }

  handlerDeleteDialogOpen = (row) => {
    console.log('delete', row);
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
            name: 'Edit Operations',
            handler: this.handlerEditDialogOpen,
          },
          {
            icon: <Delete />,
            name: 'Delete Operations',
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
