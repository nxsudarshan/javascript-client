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
} from './pages';
import { AuthRoute, PrivateRoute } from './routes';
// import { Login } from './pages';
// import { Login } from './pages';
export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
