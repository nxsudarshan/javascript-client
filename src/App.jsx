/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  Trainee,
  TraineeDetail,
  ChildrenDemo,
  TextFieldDemo,
  InputDemo,
  NoMatch,
  NotFound,
} from './pages';
import { AuthRoute, PrivateRoute } from './routes';
import { SnackBarProvider } from './contexts';
// import { Login } from './pages';
// import { Login } from './pages';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackBarProvider>
          <Switch>
            <Route path="/login" component={AuthRoute} />
            <PrivateRoute exact path="/trainee" component={Trainee} />
            <PrivateRoute path="/children-demo" component={ChildrenDemo} />
            <PrivateRoute path="/textField-demo" component={TextFieldDemo} />
            <PrivateRoute path="/input-demo" component={InputDemo} />
            <PrivateRoute path="/trainee/:id" component={TraineeDetail} />
            <PrivateRoute path="/notFound" component={NotFound} />
            <Redirect to="/trainee" />
            <PrivateRoute component={NoMatch} />
          </Switch>
        </SnackBarProvider>
      </BrowserRouter>
    </div>
  );
}
