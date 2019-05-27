/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-this-before-super */
/* eslint-disable react/sort-comp */
/* eslint-disable lines-between-class-members */
import React from 'react';

export class Children extends React.Component {
  opearators(operator) {
    return operator
      === '+' ? 'Sum'
      : operator
        === '-' ? 'Sub'
        : operator
          === '*' ? 'Mul'
          : operator
            === '/' ? 'Div'
            : '';
  }

  render() {
    const {
      first,
      second,
      operator,
      result,
    } = this.props;
    const op = this.opearators(operator);
    return (
      <>
        {
          Number(result) ? `${op} of ${first} and ${second} is ${result}` : result
        }
      </>
    );
  }
}
