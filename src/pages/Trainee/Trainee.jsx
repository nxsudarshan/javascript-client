/* eslint-disable no-useless-constructor */
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
import { TableDemo } from '../index';
import { getApi } from '../../lib/utils/api';
import { withStorage } from '../../HOC';

const style = {
  button: {
    display: 'block',
    margin: 'auto',
    float: 'right',
  },
  loader: {
    align: 'center',
  },
};


class Trainee extends React.Component {
  state = {
    open: false,
    isLoading: false,
    data: [],
    limit: '',
    skip: '',
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      token: this.props.load('user'),
      isLoading: true,
      skip: 0,
      limit: 20,
    }, () => this.getDataApi());
  }

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

  getDataApi = async () => {
    const token = this.props.load('user');
    const { skip, limit } = this.state;
    try {
      const response = await getApi(
        {
          method: 'get',
          token,
          skip,
          limit,
        },
      );
      const { data } = response.data;
      this.setState(
        {
          skip: response.config.params.skip,
          limit: response.config.params.limit,
          count: data.count,
          data: data.records,
          isLoading: !(data.count > 0),
        },
      );
    } catch (err) {
      if (err.response) {
        console.log(err.response);
      }
    }
  }

  handleSkipLimit = () => {
    const { skip, limit } = this.state;
    this.setState({
      skip: skip + limit,
      limit,
    }, () => this.getDataApi());
  }

  render() {
    const { classes, ...rest } = this.props;
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
        <TableDemo
          {...rest}
          data={this.state.data}
          count={this.state.count}
          setSkipLimit={this.handleSkipLimit}
          isLoading={this.state.isLoading}
        />
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

const WrappedComponent = withStorage(Trainee);
export default withStyles(style)(WrappedComponent);
