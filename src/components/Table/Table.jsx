/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { style } from './style';

class TableComponent extends React.Component {
  render() {
    const {
      classes,
      data,
      columns,
      id,
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
                      >
                        {item.label}
                      </TableCell>
                    </>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map(row => (
                  <TableRow key={row.id}>
                    <TableCell
                      align="center"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(style)(TableComponent);
