/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './style';

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
};

const SnackBarContext = React.createContext();
export class SnackBarProvider extends React.PureComponent {
  state = {
    open: false,
    message: null,
    variant: null,
  };

  closeSnackBar = () => {
    this.setState({
      open: false,
    });
  }

  openSnackBar = (message, variant) => {
    this.setState({
      message,
      variant,
      open: true,
    });
  }

  render() {
    const { children } = this.props;
    const { open, message, variant } = this.state;

    const snackBarProviderOutput = [
      <SnackBarContext.Provider value={{
        openSnackBar: this.openSnackBar,
      }}
      >
        {children}
      </SnackBarContext.Provider>,
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={this.closeSnackBar}
      >
        <MySnackbarContentWrapper
          onClose={this.closeSnackBar}
          variant={variant}
          message={message}
        />
      </Snackbar>,
    ];
    return snackBarProviderOutput;
  }
}

const MySnackbarContentWrapper = (props) => {
  const classes = useStyles();
  const {
    className,
    message,
    onClose,
    variant,
    ...other
  } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classes.icon} />
          {message}
        </span>
      )}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'error']).isRequired,
};

export const SnackBarConsumer = SnackBarContext.Consumer;
