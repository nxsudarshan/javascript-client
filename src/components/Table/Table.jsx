/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-sequences */
/* eslint-disable prefer-destructuring */
/* eslint-disable array-callback-return */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import TablePagination from '@material-ui/core/TablePagination';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { style } from './style';
import { TraineeDetail } from '../../pages';

class TableComponent extends React.Component {
  state = {
    page: '',
    count: '',
  };

  constructor(props) {
    super(props);
    const { page, count } = props;
    this.state = ({
      page,
      count,
    });
  }

  createSortHandler = field => (event) => {
    const { onSort, order } = this.props;
    const ord = order === 'asc' ? 'desc' : 'asc';
    onSort({
      orderBy: field,
      order: ord,
    });
  }

  handleChangePage = (event) => {
    const { onChangePage } = this.props;
    console.log(event.target.value);
    // onChangePage(value);
  }

  handleNoHandler = () => {
    console.log('there is no handler for it');
  }

  render() {
    const {
      classes,
      data,
      columns,
      order,
      orderBy,
      onSort,
      onSelect,
      actions,
      count,
      page,
    } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {
                  columns.map(item => (
                    <>
                      <TableCell
                        key={item.field}
                        align={item.align}
                        title={item.field}
                        sortDirection={orderBy === item.field ? order : false}
                      >

                        <TableSortLabel
                          active={orderBy === item.field}
                          direction={order}
                          onChange={() => this.createSortHandler(item.field)}
                        >
                          {item.label}
                        </TableSortLabel>
                      </TableCell>
                    </>
                  ))
                }
                <TableCell
                  key="operations"
                  align=""
                  title=""
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map(row => (
                  <TableRow className={classes.alternateRow} hover>
                    {
                      columns.map(items => (
                        <TableCell
                          className={classes.rowHover}
                          key={row[items.field]}
                          scope="row"
                          align={items.align}
                        >
                          <Link to={`/trainee/${row.id}`} className={classes.link}>
                            {(items.format
                              ? items.format(row[items.field])
                              : row[items.field])
                            }
                          </Link>
                        </TableCell>
                      ))
                    }
                    {
                      actions.map(item => (
                        <TableCell
                          key={item.handler}
                          scope="row"
                          align={item.align}
                        >
                          <Fab
                            size="small"
                            aria-label={item.name}
                            title={item.name}
                            onClick={() => item.handler(row)}
                          >
                            {item.icon}
                          </Fab>
                        </TableCell>
                      ))
                    }
                  </TableRow>

                ))
              }
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={50}
            rowsPerPage={this.state.count}
            page={this.state.page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }

  handleChangePage = (event, page) => {
    // const { page, count } = this.state;
    this.setState({
      page,
    });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({
      count: event.target.value,
    });
  }
}

export default withStyles(style)(TableComponent);
