/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { AddDialog } from './component';
import { default as TraineeList } from './TraineeList';
import { NoMatch } from '../index';

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
    // eslint-disable-next-line no-console
    console.log(obj);
    this.handleClickClose();
  }

  render() {
    const result = [
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add TraineeList
        </Button>
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
