/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { AuthRoute, PrivateRoute } from './routes';
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
            <Route exact path="/" component={PrivateRoute} />
          </Switch>
        </BrowserRouter>
      </SnackBarProvider>
    </div>
  );
}
