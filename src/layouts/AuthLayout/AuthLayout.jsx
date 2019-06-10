/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Footer } from '../components';

const style = ({
  content: {
    margin: 'auto',
    padding: 10,
  },
});

class AuthLayout extends React.Component {
  render() {
    const { classes, children } = this.props;
    const authLayoutOutput = [
      <div className={classes.content}>
        {children}
        <Footer />
      </div>,
    ];
    return authLayoutOutput;
  }
}
export default withStyles(style)(AuthLayout);
