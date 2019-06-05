/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable quote-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-this-before-super */
/* eslint-disable constructor-super */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Person from '@material-ui/icons/Person';
import Mail from '@material-ui/icons/Mail';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { traineeSchema } from '../../Schema/traineeSchema';

export class AddDialog extends React.Component {
  errorStyle = {
    color: 'red',
  }

  style = {
    margin: 8,
  };

  defaultState = {
    errors: [''],
    name: '',
    email: '',
    open: false,
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    hasError: false,
    isTouched: {
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    },
    isError: {
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.defaultState,
    };
  }

  handlePassword = pass => (e) => {
    this.setState({ [pass]: e.target.value });
  }

  handleClickShowPassword = (e) => {
    const { ...state } = this.state;
    this.setState({ ...state, showPassword: !state.showPassword });
  }

  handleClickShowConfirmPassword = (e) => {
    const { ...state } = this.state;
    this.setState({ ...state, showConfirmPassword: !state.showConfirmPassword });
  }

  getTextField = (event) => {
    const { errors, isTouched, isError } = this.state;
    isTouched[event.target.name] = true;
    const index = errors.findIndex(item => item.path === event.target.name);
    isError[event.target.name] = ((index > -1) && (isTouched[event.target.name]));
    this.setState({
      isTouched,
      isError,
      hasError: true,
      [event.target.name]: event.target.value,
    }, this.validate);
  }

  validate = () => {
    const {
      name,
      email,
      password,
      confirmPassword,
    } = this.state;
    traineeSchema.validate({
      name,
      email,
      password,
      confirmPassword,
    }, { abortEarly: false })
      .then((noRrr) => {
        this.setState({
          errors: [],
          hasError: false,
        });
      }).catch((err) => {
        this.setState({
          errors: err.inner,
        });
      });
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

  getError = (field) => {
    const { errors } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return index > -1 ? errors[index].message : '';
  }

  setError = (field) => {
    const { errors, isTouched } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return ((index > -1) && (isTouched[field]));
  }

  buttonDisabled = () => {
    const { errors } = this.state;
    return errors.length !== 0;
  }

  onSubmitHandle = () => {
    const { onSubmit } = this.props;
    const { name, email, password } = this.state;
    onSubmit({ name, email, password });
  }

  handleGrid = () => {
    const { hasError, isError } = this.state;
    const resultGrid = [
      <>
        <Grid item xs={12}>
          <FormControl fullWidth style={this.style}>
            <TextField
              required
              name="name"
              aria-describedby="name-helper-text"
              id="standard-required"
              onChange={this.getTextField}
              onBlur={this.onBlurHandler}
              onFocus={() => this.onFocusHandler('name')}
              error={isError.name}
              label="Name"
              // className={classes.textField}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            {isError.name ? <FormHelperText id="name-helper-text" style={this.errorStyle}>{this.getError('name')}</FormHelperText> : ''}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth style={this.style}>
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
            {isError.email ? <FormHelperText id="name-helper-text" style={this.errorStyle}>{this.getError('email')}</FormHelperText> : ''}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth style={this.style}>
            <TextField
              name="password"
              id="outlined-password"
              label="Password"
              // className={classes.textField}
              variant="outlined"
              type={this.state.showPassword ? 'text' : 'password'}
              values={this.state.password}
              onChange={this.getTextField}
              onBlur={this.onBlurHandler}
              onFocus={() => this.onFocusHandler('password')}
              error={isError.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {isError.password ? <FormHelperText id="name-helper-text" style={this.errorStyle}>{this.getError('password')}</FormHelperText> : ''}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth style={this.style}>
            <TextField
              name="confirmPassword"
              id="outlined-confirmPassword"
              label="Confirm Password"
              // className={classes.textField}
              variant="outlined"
              onChange={this.getTextField}
              onBlur={this.onBlurHandler}
              onFocus={() => this.onFocusHandler('confirmPassword')}
              error={isError.confirmPassword}
              type={this.state.showConfirmPassword ? 'text' : 'password'}
              values={this.state.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowConfirmPassword}>
                      {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {isError.confirmPassword ? <FormHelperText id="name-helper-text" style={this.errorStyle}>{this.getError('confirmPassword')}</FormHelperText> : ''}
          </FormControl>
        </Grid>
      </>,
    ];
    return resultGrid;
  }

  closeDialog = () => {
    const { onClose } = this.props;
    this.setState({
      ...this.defaultState,
      isError: {},
      isTouched: {},
    });
    onClose();
  }

  render() {
    const { open } = this.props;
    const dialogComponent = [
      <>
        <Dialog open={open} onClose={this.closeDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent fullWidth>
            <Grid container spacing={1} xs={12}>
              <DialogContentText>
                Enter Trainee Details
              </DialogContentText>
              {this.handleGrid()}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmitHandle} disabled={this.buttonDisabled()} variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>,
    ];
    return dialogComponent;
  }
}
