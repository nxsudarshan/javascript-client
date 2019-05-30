/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React from 'react';
import {
  CRICKET_ARRAY,
  SELECT_ARRAY,
  FOOTBALL_ARRAY,
  CRICKET,
  FOOTBALL,
} from '../../configs/constants';
// eslint-disable-next-line import/named
import { TextField, SelectField, RadioGroup } from '../../components';

export class InputDemo extends React.Component {
  state = {
    name: '',
    sport: '',
    [CRICKET]: '',
    [FOOTBALL]: '',
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  optionsChangeHandler = value => (e) => {
    this.setState({
      [value]: '',
    });
    this.setState({
      [value]: e.target.value,
    });
  }

  radioOptions = () => {
    if (this.state.sport === CRICKET) {
      const selected = this.state.Cricket;
      return (
        <div>
          <RadioGroup
            value={selected}
            onChange={this.optionsChangeHandler(this.state.sport)}
            options={CRICKET_ARRAY}
          />
        </div>
      );
    }
    if (this.state.sport === FOOTBALL) {
      const selected = this.state.Football;
      return (
        <div>
          <RadioGroup
            value={selected}
            onChange={this.optionsChangeHandler(this.state.sport)}
            options={FOOTBALL_ARRAY}
          />
        </div>
      );
    }
  }

  handleSportChange = (e) => {
    this.setState({
      sport: e.target.value,
      [FOOTBALL]: '',
      [CRICKET]: '',
    });
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <TextField type="text" title="Name" onChange={this.handleNameChange} value={name} />
        <SelectField type="text" title="Select the game you play" value="Select" onChange={this.handleSportChange} options={SELECT_ARRAY} />
        {this.radioOptions()}
      </>
    );
  }
}
