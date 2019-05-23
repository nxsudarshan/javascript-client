/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
import React from 'react';
import { textStyle } from '../TextField/style';

export class RadioGroup extends React.Component {
  render() {
    const {
      onChange,
      game,
      options,
    } = this.props;
    const radioSelection = Object.keys(options.Games);
    if (radioSelection.includes(game)) {
      const type = {
        ...options.Games ? ({ game }) : null,
      };
      const radioOptions = Object.keys(options.Games[type.game]);
      const resultOptions = [
        radioOptions.map(item => (
          <>
            <div>
              <input type="radio" name="game" onClick={onChange} value={item} id={item} />
              <label style={textStyle} htmlFor={item}>{item}</label>
            </div>
          </>
        )),
      ];
      return resultOptions;
    }
  }
}
