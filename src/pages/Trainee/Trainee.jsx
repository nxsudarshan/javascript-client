/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import { AddDialog } from './component';
import { default as TraineeList } from './TraineeList';
import { TableDemo } from '../index';

const style = {
  button: {
    display: 'block',
    margin: 'auto',
    float: 'right',
  },
};

class Trainee extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClickClose = () => {
    this.setState({ open: false });
  }

  onSubmit = (obj) => {
    // eslint-disable-next-line no-console
    console.log(obj);
    this.handleClickClose();
  }

  render() {
    const { classes } = this.props;
    const result = [
      <>
        <div className={classes.button}>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Add TraineeList
          </Button>
        </div>
        <br />
        <TableDemo />
        <TraineeList />
        <AddDialog
          open={this.state.open}
          onClose={this.handleClickClose}
          onSubmit={this.onSubmit}
        />

      </>,
    ];
    return result;
  }
}

export default withStyles(style)(Trainee);
