/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  BrowserRouter,
  Route,
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
            <Route path="/login" component={AuthRoute} />
            <PrivateRoute path="/trainee" component={Trainee} />
            <PrivateRoute path="/children-demo" component={ChildrenDemo} />
            <PrivateRoute path="/textField-demo" component={TextFieldDemo} />
            <PrivateRoute path="/input-demo" component={InputDemo} />
            <PrivateRoute path="/trainee/:id" component={TraineeDetail} />
            <Redirect to="/trainee" />
            <PrivateRoute component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </SnackBarProvider>
    </div>
  );
}
