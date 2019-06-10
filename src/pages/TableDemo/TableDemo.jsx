/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';

import { TableComponent } from '../../components';
import { traineeData } from '../Trainee';
import { dateFormat } from '../../configs/constants';

export class TableDemo extends React.Component {
  state = {
    order: '',
    orderBy: '',
  }

  stringToUpperCase = value => value && value.toUpperCase();

  getFormattedDate = date => moment(date).format(dateFormat);

  handleChange = (orderDetails) => {
    this.setState({ ...orderDetails });
  }

  handleSelect = (id) => {
    const { match } = this.props;
    this.props.history.push(`${match.url}/${id}`);
  }

  render() {
    const { order, orderBy } = this.state;
    const { ...rest } = this.props;
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
        {...rest}
      />
    );
  }
}
