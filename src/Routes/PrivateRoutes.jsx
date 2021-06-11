import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSelector } from '../redux/auth';

const PrivateRoute = ({ component: Component, isAuthenticated, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to='/contactsbook' />)}
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: userSelector.getToken(state),
  };
};

export default connect(mapStateToProps)(PrivateRoute);
