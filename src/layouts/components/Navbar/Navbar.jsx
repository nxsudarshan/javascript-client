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
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import {
  Trainee,
  ChildrenDemo,
  TextFieldDemo,
  InputDemo,
} from '../../../pages/index';

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
      <div>
        <BrowserRouter>
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
          <div className={classes.main}>
            <Route exact path="/" component={Trainee} />
            <Route path="/children-demo" component={ChildrenDemo} />
            <Route path="/textField-demo" component={TextFieldDemo} />
            <Route path="/input-demo" component={InputDemo} />
          </div>
        </BrowserRouter>
      </div>,
    ];
    return navbarOutput;
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Navbar);
