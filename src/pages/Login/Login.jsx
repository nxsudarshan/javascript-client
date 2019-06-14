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
import ButtonBase from '@material-ui/core/ButtonBase';
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
    .required('Email Address is a required')
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
    margin: 40,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    margin: 10,
    padding: 10,
  },
  inputMargin: {
    margin: 20,
  },
  errorStyle: {
    color: '#FF0303',
  },
  iconSize: {
    width: 5,
  },
  paper: {
    padding: 2,
    margin: 'auto',
    maxWidth: 400,
    display: 'flex',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  avatarColor: {
    padding: 2,
    margin: 'auto',
    color: 'white',
    background: 'red',
  },
  header: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    isTouched: {
      email: false,
      password: false,
    },
    isError: {
      email: false,
      password: false,
    },
  };

  getTextField = (event) => {
    const { errors, isTouched, isError } = this.state;
    isTouched[event.target.name] = true;
    const index = errors.findIndex(item => item.path === event.target.name);
    isError[event.target.name] = ((index > -1) && (isTouched[event.target.name]));
    this.setState({
      isTouched,
      isError,
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

  onBlurHandler = (event) => {
    const { errors, isTouched, isError } = this.state;
    isTouched[event.target.name] = true;
    const index = errors.findIndex(item => item.path === event.target.name);
    isError[event.target.name] = ((index > -1) && (isTouched[event.target.name]));
    this.setState({
      isTouched,
      isError,
    });
  }

  onFocusHandler = (field) => {
    const { errors, isTouched, isError } = this.state;
    isTouched[field] = true;
    const index = errors.findIndex(item => item.path === field);
    // return ((index > -1) && (isTouched[field]));
    isError[field] = ((index > -1) && (isTouched[field]));
    this.setState({
      isTouched,
      isError,
    }, this.validate);
  }

  render() {
    const { classes } = this.props;
    const { password, showPassword, isError } = this.state;
    const loginOutput = [
      <>
        <form>
          <div className={classes.paper}>
            <Paper className={classes.root}>
              <Grid>
                <Grid item>
                  <Box>
                    <Box m={4}>
                      <Grid item>
                        <Avatar className={classes.avatarColor}>
                          <LockOutlined />
                        </Avatar>
                      </Grid>
                      <Grid item className={classes.header}>
                        <Typography variant="h5">
                          Login
                        </Typography>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm container>
                  <Grid item xs className={classes.input}>
                    <Grid item className={classes.inputMargin}>
                      <FormControl fullWidth>
                        <TextField
                          name="email"
                          id="outlined-name"
                          label="Email Address"
                          // className={classes.textField}
                          variant="outlined"
                          onChange={this.getTextField}
                          onBlur={this.onBlurHandler}
                          onFocus={() => this.onFocusHandler('email')}
                          error={isError.email}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {isError.email ? (
                          <FormHelperText
                            id="email-helper-text"
                            className={classes.errorStyle}
                          >
                            {this.getError('email')}
                          </FormHelperText>
                        ) : ''}
                      </FormControl>
                    </Grid>
                    <Grid item className={classes.inputMargin}>
                      <FormControl fullWidth>
                        <TextField
                          name="password"
                          id="outlined-password"
                          label="Password"
                          // className={classes.textField}
                          variant="outlined"
                          type={showPassword ? 'text' : 'password'}
                          values={password}
                          onChange={this.getTextField}
                          onBlur={this.onBlurHandler}
                          onFocus={() => this.onFocusHandler('password')}
                          error={isError.password}
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
                        {isError.password ? (
                          <FormHelperText
                            id="password-helper-text"
                            className={classes.errorStyle}
                          >
                            {this.getError('password')}
                          </FormHelperText>
                        ) : ''}
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.bigButton}
                        disabled={this.buttonDisabled()}
                        type="reset"
                      >
                        Sign in
                      </Button>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Paper>
          </div>
        </form>
      </>,
    ];
    return loginOutput;
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
