/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';

export class Math extends React.Component {
  // eslint-disable-next-line consistent-return
  calculation(first, second, operator) {
    switch (operator) {
    case '+':
      return Number(first) + Number(second);

    case '-':
      return Number(first) - Number(second);

    case '*':
      return Number(first) * Number(second);

    case '/':
      return Number(second !== 0)
        ? Number(first)
          / Number(second)
        : 'infinity';

    case '^':
      return ('Invalid Operations');

    default:
      return ('Invalid Operator');
    }
  }

  render() {
    const {
      first,
      second,
      operator,
      children,
    } = this.props;

    const result = this.calculation(first, second, operator);
    return (
      <p>
        {children({
          result,
          first,
          second,
          operator,
        })}
      </p>
    );
  }
}
