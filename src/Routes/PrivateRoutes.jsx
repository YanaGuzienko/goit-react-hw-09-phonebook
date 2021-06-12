import { Route, Redirect } from 'react-router-dom';
import { userSelector } from '../redux/auth';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isAuthenticated = useSelector(userSelector.getToken);

  return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to='/contactsbook' />}</Route>;
};

export default PrivateRoute;
