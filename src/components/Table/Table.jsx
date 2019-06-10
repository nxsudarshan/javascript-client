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
import { Link } from 'react-router-dom';

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

  render() {
    const {
      classes,
      data,
      columns,
      order,
      orderBy,
      onSort,
      onSelect,
      id,
      match,
    } = this.props;
    console.log(match);
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
                          onClick={this.createSortHandler(item.field)}
                        >
                          {item.label}
                        </TableSortLabel>
                      </TableCell>
                    </>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>

              {
                data.map(row => (
                  <TableRow key={row.id} className={classes.alternateRow}>
                    {columns.map(items => (
                      <TableCell
                        scope="row"
                        align={items.align}
                      >
                        <Link to={`/${match.url}/${row.id}`} className={classes.link}>
                          {(items.format
                            ? items.format(row[items.field])
                            : row[items.field])
                          }
                        </Link>
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
