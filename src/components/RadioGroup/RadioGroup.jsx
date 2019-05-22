/* eslint-disable operator-linebreak */
/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-render-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Constants } from '../../configs/constants';
import { textStyle } from '../TextField/style';

export class RadioGroup extends React.Component {
  render() {
    let radioSelection;

    const { onChange, Football, Cricket } = this.props;
    console.log(Cricket, Football);
    radioSelection = (Object.keys(Constants.Games.Cricket));
    const radioOptions = [
      // eslint-disable-next-line react/void-dom-elements-no-children
      radioSelection.map(item => (
        <>
          <div>
            <input type="radio" name="game" onClick={onChange} value={item} />
            <label style={textStyle}>{item}</label>
          </div>
        </>
      )),
    ];
    return radioOptions;
  }
}
