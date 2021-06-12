import { useSelector } from 'react-redux';
import { userSelector } from '../redux/auth';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(userSelector.getToken);

  return (
    <Route {...routeProps}>{isAuthenticated && routeProps.restricted ? <Redirect to={redirectTo} /> : children} </Route>
  );
};

export default PublicRoute;
