import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { contactsSelector } from './redux/form-contacts';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { userSelector, authOperations } from './redux/auth';
import PrivateRoute from '../src/Routes/PrivateRoutes.jsx';
import PublicRoute from '../src/Routes/PubliсRoutes';

import Container from './Components/Container';

const AppBar = lazy(() => import('./Components/AppBar' /* webpackChunkName: "appBar" */));
const Registration = lazy(() => import('./Pages/Registration/' /* webpackChunkName: "registration" */));
const Login = lazy(() => import('./Pages/Login' /* webpackChunkName: "login" */));
const ContactsBook = lazy(() => import('./Components/ContactsBook' /* webpackChunkName: "contacts-book" */));
const HomePage = lazy(() => import('./Pages/HomePage' /* webpackChunkName: "home-page" */));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Suspense fallback={<p>Загружаем</p>}>
            <AppBar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <PublicRoute exact path='/registration' restricted redirectTo='/' component={Registration} />
              <PublicRoute exact path='/login' restricted redirectTo='/' component={Login} />
              <PrivateRoute path='/contactsbook' component={ContactsBook} />
            </Switch>
          </Suspense>
        </Container>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector.getContacts(state),
    isAuthenticated: userSelector.getToken(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
