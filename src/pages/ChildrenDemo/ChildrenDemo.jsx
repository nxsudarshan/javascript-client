/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Math } from '../../components';

export class ChildrenDemo extends React.Component {
  render() {
    return (
      <>
        <Math
          first="10"
          second="40"
          operator="+"
        >
          {({
            result,
            first,
            second,
            operator,
          }) => (
            <div>
              Default Template
              <br />
              {`${first} ${operator} ${second} = ${result}`}
            </div>
          )}
        </Math>
        <Math
          first="10"
          second="40"
          operator="+"
        >
          {({
            result,
            first,
            second,
          }) => (
            <div>
              {`Sum of ${first} and ${second} is ${result}`}
            </div>
          )}
        </Math>
        <Math
          first="10"
          second="40"
          operator="+"
        >
          {({
            result,
            first,
            second,
            operator,
          }) => (
            <div>
              {`${first} ${operator} ${second}=${result}`}
            </div>
          )}
        </Math>
        <Math
          first="10"
          second="40"
          operator="+"
        >
          {({
            result,
            first,
            second,
          }) => (
            <div>
              {` When we add ${first} with ${second} then we will get ${result} as result`}
            </div>
          )}
        </Math>
      </>
    );
  }
}
