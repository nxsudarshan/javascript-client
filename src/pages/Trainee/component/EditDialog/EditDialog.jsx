/* eslint-disable no-this-before-super */
/* eslint-disable constructor-super */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Person from '@material-ui/icons/Person';
import Mail from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = ({
  input: {
    margin: 10,
  },
});
class EditDialog extends React.Component {
  state = {
    name: '',
    email: '',
  };

  constructor(props) {
    super(props);
    const { data } = props;
    const { name, email } = data;
    this.state = ({
      name,
      email,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handler = () => {
    const { handleSubmit, handleClose } = this.props;
    handleSubmit(this.state);
    handleClose();
  }

  render() {
    const { classes } = this.props;
    const { open, handleClose } = this.props;
    const editDialogOutput = [
      <div>
        <form noValidate autoComplete="off">
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Edit Trainee</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Edit Trainee Details
              </DialogContentText>
              <TextField
                required
                fullWidth
                name="name"
                aria-describedby="name-helper-text"
                id="standard-required"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                className={classes.input}
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
              <TextField
                fullWidth
                name="email"
                id="outlined-name"
                label="Email Address"
                // className={classes.textField}
                variant="outlined"
                onChange={this.handleChange}
                className={classes.input}
                value={this.state.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail />
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" onClick={() => this.handler()} color="primary" autoFocus>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>,
    ];
    return editDialogOutput;
  }
}

export default withStyles(styles)(EditDialog);
