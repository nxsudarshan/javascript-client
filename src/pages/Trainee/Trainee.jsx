/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Button from '@material-ui/core/Button';
import { AddDialog } from './component';

export class Trainee extends React.Component {
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
    console.log(obj);
    this.handleClickClose();
  }

  render() {
    const result = [
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Trainee
        </Button>
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
