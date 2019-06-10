/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    // eslint-disable-next-line arrow-body-style
    get = (key) => {
      return localStorage.getItem(key);
    }

    // eslint-disable-next-line arrow-body-style
    set = (key, value) => {
      return localStorage.setItem(key, value);
    }

    // eslint-disable-next-line arrow-body-style
    remove = (key) => {
      return localStorage.removeItem(key);
    }

    render() {
      return (
        <>
          <WrappedComponent
            load={this.get}
            save={this.set}
            remove={this.remove}
            {...this.props}
          />
        </>
      );
    }
  }
  return HOC;
};

export default withStorage;
