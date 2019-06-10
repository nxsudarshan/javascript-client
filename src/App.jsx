/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
} from 'react-router-dom';
import { AuthRoute, PrivateRoute } from './routes';

import {
  Trainee,
  ChildrenDemo,
  TextFieldDemo,
  InputDemo,
  TraineeDetail,
  NoMatch,
  Login,
} from './pages';
import { SnackBarProvider } from './contexts';
// import { Login } from './pages';
// import { Login } from './pages';
export default function App() {
  return (
    <div className="App">
      <SnackBarProvider>
        <BrowserRouter>
          <Switch>
            <AuthRoute path="/login" component={Login} />
            <PrivateRoute key="1" path="/trainee" component={Trainee} />
            <PrivateRoute key="2" path="/children-demo" component={ChildrenDemo} />
            <PrivateRoute key="3" path="/textField-demo" component={TextFieldDemo} />
            <PrivateRoute key="4" path="/input-demo" component={InputDemo} />
            <PrivateRoute key="5" path="/trainee/:id" component={TraineeDetail} />
            <Redirect to="/trainee" />
            <PrivateRoute component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </SnackBarProvider>
    </div>
  );
}
