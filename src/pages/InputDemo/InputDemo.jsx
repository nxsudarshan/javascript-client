/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Constants } from '../../configs/constants';
// eslint-disable-next-line import/named
import { TextField, SelectField, RadioGroup } from '../../components';

export class InputDemo extends React.Component {
  state = {
    ...Constants.First,
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  optionsChangeHandler = (e, val) => {
    if (this.state.sport !== 'Cricket') {
      this.setState({
        football: e.target.value,
      });
    } else {
      this.setState({
        cricket: e.target.value,
      });
    }
  }

  radioOptions = () => {
    const { sport } = this.state;
    const Games = Object.keys(Constants.Games);
    if (Games.includes(sport)) {
      return (
        <div>
          <RadioGroup
            onChange={this.optionsChangeHandler}
            game={sport}
            options={Constants}
          />
        </div>
      );
    }
    return null;
  }

  handleSportChange = (e) => {
    this.setState({
      sport: e.target.value,
      cricket: '',
      football: '',
    }, this.radioOptions);
  }

  render() {
    return (
      <>
        <TextField type="text" onChange={this.handleNameChange} title="Name" />
        <SelectField type="text" onChange={this.handleSportChange} title="Select the game you play" options={Constants} />
        {this.radioOptions()}
      </>
    );
  }
}
