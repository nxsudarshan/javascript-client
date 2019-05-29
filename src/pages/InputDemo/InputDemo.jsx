/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { CRICKET_ARRAY, SELECT_ARRAY, FOOTBALL_ARRAY } from '../../configs/constants';
// eslint-disable-next-line import/named
import { TextField, SelectField, RadioGroup } from '../../components';

export class InputDemo extends React.Component {
  state = {
    name: '',
    sport: '',
    cricket: '',
    football: '',
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  optionsChangeHandler = (e, val) => {

  }

  radioOptions = () => {

  }

  handleSportChange = (e) => {
    this.setState({
      sport: e.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <TextField type="text" title="Name" onChange={this.handleNameChange} value={name} />
        <SelectField type="text" title="Select the game you play" value="Select" onChange={this.handleSportChange} options={SELECT_ARRAY} />
      </>
    );
  }
}
