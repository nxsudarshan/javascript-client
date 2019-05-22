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

  inputChangeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  radioChangeHandler = (e, val) => {
    this.setState({
      cricket: e.target.value,
    });
  }

  cricketOption = () => {
    const { sport } = this.state;
    if (sport === 'Cricket') {
      return (
        <div>
          <RadioGroup onChange={this.radioChangeHandler} {...Constants.Games.Cricket} />
        </div>
      );
    }
    if (sport === 'Football') {
      return (
        <div>
          <RadioGroup onChange={this.radioChangeHandler} {...Constants.Games.Football} />
        </div>
      );
    }
    return null;
  }

  selectChangeHandler = (e) => {
    this.setState({
      sport: e.target.value,
    });
  }

  render() {
    return (
      <>
        <TextField type="text" onChange={this.inputChangeHandler} title="Name" />
        <SelectField type="text" onChange={this.selectChangeHandler} title="Select the game you play" />
        {this.cricketOption()}

      </>
    );
  }
}
// export const SelectFieldDemo = () => (
//   <>
//     <TextField type="text" value="abc" />
//   </>
// );
