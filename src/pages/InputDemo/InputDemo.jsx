/* eslint-disable import/no-duplicates */
/* eslint-disable no-underscore-dangle */
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
import { Button } from '../../components';
import {
  CRICKET_ARRAY,
  SELECT_ARRAY,
  FOOTBALL_ARRAY,
  CRICKET,
  FOOTBALL,
} from '../../configs/constants';
// eslint-disable-next-line import/named
import { TextField, SelectField, RadioGroup } from '../../components';

const touchedError = {
  color: 'red',
};

const buttonStyle = {
  backgroundColor: 'silver',
  color: 'black',
};
export class InputDemo extends React.Component {
  state = {
    name: '',
    sport: '',
    errors: [],
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
    }, this.validate);
  }

  getError = (field) => {
    const { errors } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return index > -1 ? errors[index].message : '';
  }

  _onFocus = () => {
    this.setState({
      touched: true,
    }, this.validate);
  }

  _onBlur = () => {
    this.setState({
      touched: false,
    }, this.validate);
  }

  buttonChangeHandle = (e) => {
    console.log('testing');
  }

  render() {
    return (
      <>
        <TextField
          isTouched={this.state.touched}
          type="text"
          onChange={this.handleNameChange}
          title="Name"
          onFocus={this._onFocus}
          onBlur={this._onBlur}
        />

        <span style={touchedError}>{this.getError('name')}</span>

        <SelectField
          type="text"
          isTouched={this.state.touched}
          onChange={this.handleSportChange}
          title="Select the game you play?"
          options={SELECT_ARRAY}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
        />

        <span style={touchedError}>{this.getError('sport')}</span>

        {this.radioOptions()}

        <span style={touchedError}>{this.getError('options')}</span>

        <div>
          <Button
            isTouched={this.state.touched && this.state.noError}
            name="submit"
            value="Submit"
            style={buttonStyle}
            onClick={this.buttonChangeHandle}
            disabled={this.state.touched && this.state.noError}
          />
          <Button
            name="cancel"
            value="Cancel"
            style={buttonStyle}
            onClick={this.buttonChangeHandle}
            disabled={this.state.touched && this.state.noError}
          />
        </div>
      </>
    );
  }
}
