import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoaderAndMessage = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      const isLoadingOutput = [
        <CircularProgress disableShrink />,
      ];
      return isLoadingOutput;
    }
  }
  return HOC;
};

export default withLoaderAndMessage;
