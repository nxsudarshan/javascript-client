/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
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
import { Link,Redirect } from 'react-router-dom';
import { withStorage } from '../../../HOC';

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
    marginBottom: 80,
  },
});
class Navbar extends React.Component {
  state = {
    logoutSuccess: false,
  };

  handleLogout = () => {
    const { remove } = this.props;
    remove('user');
    this.setState({ logoutSuccess: true });
    // eslint-disable-next-line no-unused-expressions
  }

  render() {
    const { classes } = this.props;
    if (this.state.logoutSuccess) {
      return (<Redirect to="/login" />);
    }
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
            <Button color="inherit" className={classes.logout} onClick={() => this.handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>,
    ];
    return navbarOutput;
  }
}
const WrappedComponent = withStorage(Navbar);
export default withStyles(useStyles)(WrappedComponent);
