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

import { ButtonComponent as Button } from '../../components';
import {
  CRICKET_ARRAY,
  SELECT_ARRAY,
  FOOTBALL_ARRAY,
  CRICKET,
  FOOTBALL,
} from '../../configs/constants';
// eslint-disable-next-line import/named
import { TextField, SelectField, RadioGroup } from '../../components';
import { inputDemoSchema } from '../../configs';

const touchedError = {
  color: 'red',
};

const errorStyle = {
  borderColor: 'red',
};

const buttonStyle = {
  color: 'black',
  height: '40px',
  width: '100px',
  padding: '10px',
  fontWeight: 'bold',
  border: '0.5px solid black',
  margin: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
};
export class InputDemo extends React.Component {
  state = {
    name: '',
    sport: '',
    errors: [''],
    [CRICKET]: '',
    [FOOTBALL]: '',
  }

  initialState = {

  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    }, this.validate);
  }

  optionsChangeHandler = value => (e) => {
    this.setState({
      [value]: e.target.value,
      radio: e.target.value,
    }, this.validate);
  }

  isTouched = (field) => {
    const { errors } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return index > -1;
  }

  radioOptions = () => {
    if (this.state.sport === CRICKET) {
      const { cricket } = this.state;
      return (
        <div>
          <RadioGroup
            value={cricket}
            onClick={this.optionsChangeHandler(this.state.sport)}
            options={CRICKET_ARRAY}
            error={this.isTouched('radio')}
          />
          <span style={touchedError}>{this.getError('radio')}</span>
        </div>
      );
    }
    if (this.state.sport === FOOTBALL) {
      const { football } = this.state;
      return (
        <div>
          <RadioGroup
            value={football}
            onClick={this.optionsChangeHandler(this.state.sport)}
            options={FOOTBALL_ARRAY}
            error={this.isTouched('radio')}
          />
          <span style={touchedError}>{this.getError('radio')}</span>
        </div>
      );
    }
  }

  handleSportChange = (e) => {
    this.setState({
      sport: e.target.value,
      cricket: '',
      football: '',
      radio: '',
    }, this.validate);
  }

  getError = (field) => {
    const { errors } = this.state;
    const index = errors.findIndex(item => item.path === field);
    return index > -1 ? errors[index].message : '';
  }

  hasErrors = () => {
    const { errors } = this.state;
    return errors.length !== 0;
  }

  _onBlur = () => {
    this.setState({
      touched: false,
    }, this.validate);
  }

  buttonSubmitChangeHandle = (e) => {
    console.log('testing');
  }

  buttonCancelChangeHandle = (e) => {
    console.log(e);
  }

  validate = () => {
    const {
      name,
      sport,
      radio,
    } = this.state;
    inputDemoSchema.validate({ name, sport, radio }, { abortEarly: false })
      .then((noError) => {
        this.setState({
          errors: [],
        });
      }).catch((error) => {
        this.setState({
          errors: error.inner,
        });
      });
  }

  clearRadioOptions = () => {
    this.setState({
    }, this.validate);
  }

  render() {
    return (
      <>
        <TextField
          isTouched={this.state.touched}
          type="text"
          onChange={this.handleNameChange}
          title="Name"
          onBlur={this._onBlur}
          error={this.isTouched('name')}
        />
        <span style={touchedError}>{this.getError('name')}</span>
        <SelectField
          onBlur={this.clearRadioOptions}
          type="text"
          isTouched={this.state.touched}
          onChange={this.handleSportChange}
          title="Select the game you play?"
          options={SELECT_ARRAY}
          error={this.isTouched('sport')}
        />

        <span style={touchedError}>{this.getError('sport')}</span>
        {this.radioOptions()}
        <div>
          <Button
            name="submit"
            value="Submit"
            style={buttonStyle}
            onClick={this.buttonSubmitChangeHandle}
            disabled={this.hasErrors()}
          />
          <Button
            name="cancel"
            value="Cancel"
            style={buttonStyle}
            onClick={this.buttonCancelChangeHandle}
          />
        </div>
      </>
    );
  }
}
