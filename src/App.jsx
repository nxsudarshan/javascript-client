/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { AuthRoute, PrivateRoute } from './routes';
// import { Login } from './pages';
// import { Login } from './pages';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={AuthRoute} />
          <Route exact path="/" component={PrivateRoute} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
