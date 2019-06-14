/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import { TableComponent } from '../../components';
import { EditDialog, RemoveDialog } from '../Trainee/component';
// import { traineeData } from '../Trainee';
import { dateFormat } from '../../configs/constants';
import { SnackBarConsumer } from '../../contexts/SnackBarProvider/SnackBarProvider';
import { withLoaderAndMessage } from '../../HOC';

const requiredDate = '2019-02-14';
const EnhancedTable = withLoaderAndMessage(TableComponent);
export class TableDemo extends React.Component {
  page = 0;

  count = 10;

  state = {
    order: '',
    orderBy: '',
    editDialog: false,
    open: false,
    deleteDialog: false,
  }

  stringToUpperCase = value => value && value.toUpperCase();

  getFormattedDate = date => moment(date).format(dateFormat);

  dataIsAfter = date => moment(date).format('YYYY-MM-DD');

  handleChange = (orderDetails) => {
    this.setState({ ...orderDetails });
  }

  handleCloseDialog = () => {
    this.setState({
      open: false,
      deleteDialog: false,
      editDialog: false,
      submitDialog: false,
    });
  }

  handleSubmitDialog = (value) => {
    const { openSnackBar } = this.context;
    openSnackBar('Trainee data successfully stored', 'success');
    console.log('Edited Item-->', value);
  }

  handlerEditDialogOpen = (row) => {
    this.setState({
      editDialog: true,
      row,
    });
  }

  handlerDeleteDialogOpen = (row) => {
    this.setState({
      deleteDialog: true,
      row,
    });
  }

  handleDeleteDialog = (value) => {
    const date = this.dataIsAfter(value.createdAt);
    const isAfter = moment(date).isAfter(requiredDate);
    const { openSnackBar } = this.context;
    if (isAfter) {
      openSnackBar('Record Delete successfully', 'success');
      console.log('Deleted Item-->', [value.name, value.email]);
    } else {
      openSnackBar('Error Record cannot delete due to date', 'error');
    }
  }

  render() {
    const {
      order,
      orderBy,
      deleteDialog,
      editDialog,
      row,
    } = this.state;
    const { data, count, ...rest } = this.props;
    return (
      <>
        <EnhancedTable
          {...rest}
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
          data={data}
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
          count={count}
          page={this.page}
          onChangePage={this.handleChangePage}
        />
        {editDialog && (
          <EditDialog
            open={editDialog}
            handleClose={this.handleCloseDialog}
            data={row}
            handleSubmit={this.handleSubmitDialog}
          />
        )
        }
        {deleteDialog
          && (
            <RemoveDialog
              open={deleteDialog}
              handleClose={this.handleCloseDialog}
              data={row}
              handleDelete={this.handleDeleteDialog}
            />
          )
        }
      </>
    );
  }
}

TableDemo.contextType = SnackBarConsumer;
