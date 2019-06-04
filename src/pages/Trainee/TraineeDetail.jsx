/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import { default as traineeData } from './Data/trainee';
import { PrivateLayout } from '../../layouts';

const cardStyles = {
  card: {
    marginTop: 100,
    margin: 40,
    padding: 10,
    display: 'flex',
  },
  button: {
    marginTop: 10,
    margin: 40,
    padding: 10,
    display: 'flex',
  },
  media: {
    flex: 1,
    maxWidth: 300,
  },
  content: {
    maxWidth: 600,
    flex: 9,
  },
  title: {
    fontSize: 30,
  },
  date: {
    color: '#9e9e9e',
  },
};
class TraineeDetail extends React.Component {
  getDateFormatted = date => moment(date).format('dddd, MMMM Do YYYY, h: mm: ss a')

  render() {
    const { match, classes } = this.props;
    console.log(this.props);
    const { params } = match;
    const getRow = traineeData.filter(row => row.id === params.id);
    console.log(getRow);
    const traineeDetailOutput = [
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          image="/images/avatar.png"
          title="Contemplative Reptile"
        />
        <div className={classes.content}>
          <CardContent className={classes.title}>
            <Typography variant="h4" gutterBottom>
              {getRow.map(item => item.name)}
            </Typography>
            <Typography variant="h6" gutterBottom className={classes.date}>
              {this.getDateFormatted(getRow.map(item => item.createdAt))}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {getRow.map(item => item.email)}
            </Typography>
          </CardContent>
        </div>
      </Card>,
      <div className={classes.button}>
        <Link to="/">
          <Button size="small">
            Back
          </Button>
        </Link>
      </div>,
    ];
    return traineeDetailOutput;
  }
}

export default withStyles(cardStyles)(TraineeDetail);
