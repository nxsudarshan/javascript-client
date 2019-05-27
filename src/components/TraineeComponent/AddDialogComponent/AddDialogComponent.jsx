/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-this-before-super */
/* eslint-disable constructor-super */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
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

export function AddDialogComponent() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClickClose() {
    setOpen(false);
  }

  const dialogComponent = [
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Trainee
      </Button>
      <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Trainee Details
          </DialogContentText>
          <TextField
            required
            id="standard-required"
            label="Name"
            // className={classes.textField}
            variant="outlined"
            error
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Email"
            // className={classes.textField}
            variant="outlined"
            error
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail />
                </InputAdornment>
              ),
            }}
          />
          <br />

          <TextField
            required
            id="standard-required"
            label="Password"
            // className={classes.textField}
            variant="outlined"
            error
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton aria-label="Toggle password visibility" onClick={handleClickClose}>
                    <Visibility />
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>,
  ];
  return dialogComponent;
}
