/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoaderAndMessage = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      const { data } = this.props;
      if (data.length === 0) {
        return (
          <CircularProgress />
        );
      }
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return HOC;
};

export default withLoaderAndMessage;
