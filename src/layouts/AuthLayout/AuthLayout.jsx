/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Login } from '../../pages';
import { Footer } from '../components';

const style = ({
  content: {
    margin: 'auto',
    padding: 10,
  },
});

class AuthLayout extends React.Component {
  render() {
    const { classes } = this.props;
    const authLayoutOutput = [
      <div className={classes.content}>
        <Login />
        <Footer />
      </div>,
    ];
    return authLayoutOutput;
  }
}

AuthLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(AuthLayout);
