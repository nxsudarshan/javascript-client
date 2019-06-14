/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
class NotFound extends React.Component {
  render() {
    const { classes } = this.props;
    const notFoundOutput = [
      <div className={classes.content}>
        <Typography variant="h3" component="h3" className={classes.title}>
          User Not found
        </Typography>
        <Typography component="p" className={classes.p}>
          You are trying to accessing the page is not found in the source.
        </Typography>
        <Link to="/">
          <Button size="small">
            Back
          </Button>
        </Link>
      </div>,
    ];
    return notFoundOutput;
  }
}

export default withStyles(style)(NotFound);
