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
import PropTypes from 'prop-types';

const useStyles = ({
  root: {
    spacing: 8,
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
});
class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    const navbarOutput = [
      <div>
        <AppBar position="static" m={0}>
          <Toolbar className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              Trainee Portal
            </Typography>
            <Button color="inherit">trainee</Button>
            <Button color="inherit">textField demo</Button>
            <Button color="inherit">input demo</Button>
            <Button color="inherit">children demo</Button>
            <Button color="inherit" className={classes.logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>,
    ];
    return navbarOutput;
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Navbar);
