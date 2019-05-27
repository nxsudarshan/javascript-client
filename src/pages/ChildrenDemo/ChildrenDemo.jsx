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
import { Children } from './index';


export class ChildrenDemo extends React.Component {
  render() {
    return (
      <>
        <Math
          first="10"
          second="40"
          operator="/"
        >
          {({
            result,
            first,
            second,
            operator,
          }) => (
            <div>
              <Children
                first={first}
                second={second}
                operator={operator}
                result={result}
              />
            </div>
          )}
        </Math>
      </>
    );
  }
}
