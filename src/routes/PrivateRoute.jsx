import React from 'react';
import {
  Route,
} from 'react-router-dom';
import { PrivateLayout } from '../layouts';

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchedProps => (
        <PrivateLayout>
          <Component {...matchedProps} />
        </PrivateLayout>
      )
      }
    />
  );
};
// export class PrivateRoute extends React.Component {
//   render() {
//     const privateRiteOutput = [
//       <>
//         <BrowserRouter>
//           <Switch>
//             <Route exact path="/" component={PrivateLayout} />
//           </Switch>
//         </BrowserRouter>
//       </>,
//     ];
//     return privateRiteOutput;
//   }
// }
