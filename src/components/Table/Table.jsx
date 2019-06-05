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
import { style } from './style';


class TableComponent extends React.Component {
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

  handleClick = (row, item) => () => {
    item.handler(row);
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
                  key=""
                  align=""
                  title=""
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map(row => (
                  <TableRow className={classes.alternateRow} hover>
                    {columns.map(items => (
                      <TableCell
                        className={classes.rowHover}
                        key={row[items.field]}
                        scope="row"
                        align={items.align}
                      >
                        {(items.format
                          ? items.format(row[items.field])
                          : row[items.field])
                        }
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
                            onClick={() => this.handleClick(row, item)}
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
        </Paper>
      </div>
    );
  }
}

export default withStyles(style)(TableComponent);
