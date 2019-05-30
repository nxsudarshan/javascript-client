/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Mail from '@material-ui/icons/Mail';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string()
    .required('Email Add is a required')
    .email('Email Address must be a valid'),
  password: yup.string()
    .required('Password is Required'),
});

const styles = ({
  primary: {
    margin: 40,
  },
  secondary: {
    margin: 0,
    padding: 10,
  },
  root: {
    color: '#FFFFFF',
    backgroundColor: '#FC0043',
  },
  bigButton: {
    marginTop: 30,
    height: 50,
  },
  errorStyle: {
    color: '#FF0303',
  },
  iconSize: {
    width: 5,
  },
});
class Login extends React.Component {
  initialState = {
    /* etc */
  };

  state = {
    errors: [''],
    email: '',
    password: '',
    showPassword: false,
  };

  getTextField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, this.validate);
  }

  validate = () => {
    const {
      email,
      password,
    } = this.state;
    loginSchema.validate({
      email,
      password,
    }, { abortEarly: false })
      .then((noRrr) => {
        this.setState({
          errors: [],
        });
      }).catch((err) => {
        this.setState({
          errors: err.inner,
        });
      });
  }

  getError = (field) => {
    const { errors } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return index > -1 ? errors[index].message : '';
  }

  setError = (field) => {
    const { errors } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return index > -1;
  }

  buttonDisabled = () => {
    const { errors } = this.state;
    return errors.length !== 0;
  }

  handleClickShowPassword = (e) => {
    const { ...state } = this.state;
    this.setState({ ...state, showPassword: !state.showPassword });
  }

  formSubmit = (e) => {
    this.setState({
      errors: [''],
      email: '',
      password: '',
      showPassword: false,
    });
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;
    const { password, showPassword } = this.state;
    const loginOutput = [
      <>
        <Grid className={classes.primary} container justify="center">
          <Grid item xs={3}>
            <Paper>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box m={2}>
                  <Avatar className={classes.root}><LockOutlined /></Avatar>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Typography variant="h5" component="h1">
                    Login
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" m={2} p={1}>
                <Grid container justify="center" spacing={1}>
                  <Grid item xs={12}>
                    <FormControl fullWidth style={this.style}>
                      <TextField
                        name="email"
                        id="outlined-name"
                        label="Email Address"
                        // className={classes.textField}
                        variant="outlined"
                        onChange={this.getTextField}
                        onFocus={this.getTextField}
                        error={this.setError('email')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormHelperText
                        id="email-helper-text"
                        className={classes.errorStyle}
                      >
                        {this.getError('email')}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth style={this.style}>
                      <TextField
                        name="password"
                        id="outlined-password"
                        label="Password"
                        // className={classes.textField}
                        variant="outlined"
                        onFocus={this.getTextField}
                        type={showPassword ? 'text' : 'password'}
                        values={password}
                        onChange={this.getTextField}
                        error={this.setError('password')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                className={classes.iconSize}
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormHelperText id="password-helper-text" className={classes.errorStyle}>{this.getError('password')}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.bigButton}
                      disabled={this.buttonDisabled()}
                      onClick={this.formSubmit}
                    >
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </>,
    ];
    return loginOutput;
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
