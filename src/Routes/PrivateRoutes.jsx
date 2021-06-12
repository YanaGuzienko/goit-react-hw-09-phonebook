import { Route, Redirect } from 'react-router-dom';
import { userSelector } from '../redux/auth';
import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, isAuthenticated, ...routeProps }) => (
//   <Route
//     {...routeProps}
//     render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to='/contactsbook' />)}
//   />
// );

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: userSelector.getToken(state),
//   };
// };

// export default connect(mapStateToProps)(PrivateRoute);

const PrivateRoute = ({ children, ...routeProps }) => {
  const isAuthenticated = useSelector(userSelector.getToken);

  return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to='/contactsbook' />}</Route>;
};

export default PrivateRoute;
