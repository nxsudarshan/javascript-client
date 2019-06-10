/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = ({
  root: {
    textDecoration: 'none !important',
    color: '#fff',
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    fontSize: 22,
  },
  content: {
    fontSize: 20,
  },
  logout: {
    marginLeft: 20,
  },
  main: {
    marginTop: 80,
  },
});
class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    const navbarOutput = [
      <div className={classes.main}>
        <AppBar position="fixed">
          <Toolbar className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              Trainee Portal
            </Typography>
            <Link to="/">
              <Button color="inherit" className={classes.root}>
                trainee
              </Button>
            </Link>
            <Link to="/textField-demo" className={classes.root}>
              <Button color="inherit">
                textField demo
              </Button>
            </Link>
            <Link to="/input-demo">
              <Button color="inherit" className={classes.root}>
                input demo
              </Button>
            </Link>
            <Link to="/children-demo">
              <Button color="inherit" className={classes.root}>
                children demo
              </Button>
            </Link>
            <Button color="inherit" className={classes.logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>,
    ];
    return navbarOutput;
  }
}

export default withStyles(useStyles)(Navbar);
