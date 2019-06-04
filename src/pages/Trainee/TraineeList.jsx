/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { traineeData } from './index';

const listStyle = {
  content: {
    padding: 10,
    margin: 5,
    fontSize: 20,
  },
};
class TraineeList extends React.Component {
  render() {
    const { classes } = this.props;
    const traineeListOutput = [
      <div className={classes.content}>
        <ul>
          {
            traineeData.map(item => (
              <li>
                <Link to={`/trainee/${item.id}`}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>,
    ];
    return (traineeListOutput);
  }
}


export default withStyles(listStyle)(TraineeList);
