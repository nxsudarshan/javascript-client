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
import { traineeSchema } from '../../../configs/traineeSchema';

export class AddDialogComponent extends React.Component {
  errorStyle = {
    color: 'red',
  }

  style = {
    margin: 8,
  };

  state = {
    errors: [],
    name: '',
    email: '',
    open: false,
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  }

  handleClickOpen = (e) => {
    this.setState({ open: true });
  }

  handleClickClose = (e) => {
    this.setState({ open: false }, this.printData);
  }

  printData = () => {
    const { name, email, password } = this.state;
    const data = {
      'name': name,
      'email': email,
      'password': password,
    };
    // eslint-disable-next-line no-console
    console.log(data);
  }

  handlePassword = pass => (e) => {
    this.setState({ [pass]: e.target.value });
  }

  handleClickShowPassword = (e) => {
    const { ...state } = this.state;
    this.setState({ ...state, showPassword: !state.showPassword });
  }

  handleConfirmPassword = pass => (e) => {
    this.setState({ [pass]: e.target.value });
  }

  handleClickShowConfirmPassword = (e) => {
    const { ...state } = this.state;
    this.setState({ ...state, showConfirmPassword: !state.showConfirmPassword });
  }

  renderTextField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, this.validate);
  }

  getTextField = (event) => {
    this.setState({
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

  render() {
    const { state } = this.props;
    const dialogComponent = [
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Trainee
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent fullWidth>
            <Grid container spacing={1} xs={12}>
              <DialogContentText>
                Enter Trainee Details
              </DialogContentText>
              <Grid item xs={12}>
                <FormControl fullWidth style={this.style}>
                  <TextField
                    required
                    name="name"
                    aria-describedby="name-helper-text"
                    id="standard-required"
                    onFocus={this.renderTextField}
                    onChange={this.getTextField}
                    error={this.setError('name')}
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
                  <FormHelperText id="name-helper-text" style={this.errorStyle}>{this.getError('name')}</FormHelperText>
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
                    onFocus={this.renderTextField}
                    error={this.setError('email')}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormHelperText id="email-helper-text" style={this.errorStyle}>{this.getError('email')}</FormHelperText>
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
                    onFocus={this.renderTextField}
                    type={this.state.showPassword ? 'text' : 'password'}
                    values={this.state.password}
                    onChange={this.getTextField}
                    error={this.setError('password')}
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
                  <FormHelperText id="password-helper-text" style={this.errorStyle}>{this.getError('password')}</FormHelperText>
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
                    onFocus={this.renderTextField}
                    onChange={this.renderTextField}
                    type={this.state.showConfirmPassword ? 'text' : 'password'}
                    values={this.state.confirmPassword}
                    error={this.setError('confirmPassword')}
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
                  <FormHelperText id="confirmPassword-helper-text" style={this.errorStyle}>{this.getError('confirmPassword')}</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClickClose} disabled={this.buttonDisabled()} variant="contained" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>,
    ];
    return dialogComponent;
  }
}
