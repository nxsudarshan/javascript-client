/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export class RemoveDialog extends React.Component {
  handleDelete = () => {
    const { data, handleDelete, handleClose } = this.props;
    if (window.confirm('Are you sure you want to delete the selected trainee') === true) {
      handleDelete(data);
      handleClose();
    }
  }

  render() {
    const {
      open,
      handleClose,
      data,
    } = this.props;

    const removeDialogOutput = [
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to remove
              <br />
              <b>{data.name}</b>
              &nbsp; from trainee !!!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={this.handleDelete} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>,
    ];
    return removeDialogOutput;
  }
}
