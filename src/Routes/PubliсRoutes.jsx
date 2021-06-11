import { connect } from 'react-redux';
import { userSelector } from '../redux/auth';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: userSelector.getToken(state),
});

export default connect(mapStateToProps)(PublicRoute);
