/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const style = ({
  content: {
    textAlign: 'center',
    margin: 'auto',
    fontSize: 22,
  },
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    const footerOutput = [
      <div className={classes.content}>
        &copy; Successive Technology
      </div>,
    ];
    return footerOutput;
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Footer);
