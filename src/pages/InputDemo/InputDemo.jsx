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

export const textStyle = {
  margin: 'auto',
  marginBottom: '1px',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '18px',
};

export class InputDemo extends React.Component {
  state = {
    ...Constants.First,
    errors: [],
    options: false,
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
        });
      }).catch((err) => {
        this.setState({
          errors: err.inner,
        });
      });
  }

  optionsChangeHandler = (e, val) => {
    if (this.state.sport !== 'Cricket') {
      this.setState({
        football: e.target.value,
        cricket: '',
        options: true,
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

  render() {
    return (
      <>
        <TextField type="text" onChange={this.handleNameChange} title="Name" />
        <span>{this.getError('name')}</span>
        <SelectField type="text" onChange={this.handleSportChange} title="Select the game you play?" options={Constants} />
        <span>{this.getError('sport')}</span>
        {this.radioOptions()}
        <span>{this.getError('options')}</span>
      </>
    );
  }
}
