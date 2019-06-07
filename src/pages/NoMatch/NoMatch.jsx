/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/styles';

const style = {
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  p: {
    margin: 'auto',
  },
  title: {
    margin: 'auto',
  },
};
class NoMatch extends React.Component {
  render() {
    const { classes } = this.props;
    const notFoundOutput = [
      <div className={classes.content}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Page Not Found 404
        </Typography>
        <Typography component="p" className={classes.p}>
          You are trying to accessing the page is not found in the source.
        </Typography>
      </div>,
    ];
    return notFoundOutput;
  }
}

export default withStyles(style)(NoMatch);
