/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import { withStyles } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(2),
  },
  message: {
    margin:'auto',
    display: 'flex',
    alignItems: 'center',
  },
}));
