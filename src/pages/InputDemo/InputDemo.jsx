/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable dot-notation */
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
import { formSchema } from '../../configs/formSchema';
import { errorStyle } from '../../components/TextField/style';
import { Button } from '../../components/Button';

const touchedError = {
  marginBottom: '1px',
  padding: '10px',
  fontWeight: 'bold',
  color: 'red',
};
const textStyle = {
  margin: 'auto',
  marginBottom: '1px',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '18px',
};

const buttonStyle = {
  backgroundColor: 'silver',
  color: 'white',
  fontSize: '14px',
  border: 'none',
  margin: '10px',
  padding: '10px',
};

export class InputDemo extends React.Component {
  state = {
    ...Constants.First,
    errors: [],
    options: false,
    touched: true,
    noError: false,
  };

  componentDidUpdate() {

  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    }, this.validate);
  }

  validate = () => {
    const {
      name,
      sport,
      options,
    } = this.state;
    formSchema.validate({
      name,
      sport,
      options,
    }, { abortEarly: false })
      .then((nErr) => {
        this.setState({
          errors: [],
          options: true,
          touched: true,
          noError: true,
        });
      }).catch((err) => {
        this.setState({
          errors: err.inner,
          options: true,
          touched: false,
          noError: false,
        });
      });
  }

  optionsChangeHandler = (e, val) => {
    if (this.state.sport !== 'Cricket') {
      this.setState({
        football: e.target.value,
        cricket: '',
        options: false,
      }, this.validate);
    } else {
      this.setState({
        football: '',
        cricket: e.target.value,
        options: true,
      }, this.validate);
    }
  }

  radioOptions = () => {
    const { sport } = this.state;
    const Games = Object.keys(Constants.Games);
    if (Games.includes(sport)) {
      return (
        <div>
          <p style={textStyle}>What you do?</p>
          <RadioGroup
            checked={this.state.checked}
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
          options={Constants}
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
            name="submit"
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
