/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
// import { Login } from './pages';
import { Navbar, Trainee } from './pages';

export default function App() {
  return (
    <div className="App">
      <Navbar>
        {Trainee}
      </Navbar>
      {/* <Login /> */}
    </div>
  );
}
