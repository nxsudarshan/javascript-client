/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const withLoaderAndMessage = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      const { data } = this.props;
      if (!data) {
        return (
          <>
            <Grid container>
              <Grid container item xs={12}>
                <Typography variant="h3" component="h3">
                OOPS!, No More Trainees
                </Typography>
              </Grid>
            </Grid>
          </>
        );
      }
      if (data.length === 0) {
        return (
          <>
            <Grid container>
              <Grid container item xs={12}>
                <CircularProgress />
              </Grid>
            </Grid>
          </>
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
