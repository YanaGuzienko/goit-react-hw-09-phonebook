import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { authOperations } from './redux/auth';
import PrivateRoute from '../src/Routes/PrivateRoutes.jsx';
import PublicRoute from '../src/Routes/PubliсRoutes';

import Container from './Components/Container';

const AppBar = lazy(() => import('./Components/AppBar' /* webpackChunkName: "appBar" */));
const Registration = lazy(() => import('./Pages/Registration/' /* webpackChunkName: "registration" */));
const Login = lazy(() => import('./Pages/Login' /* webpackChunkName: "login" */));
const ContactsBook = lazy(() => import('./Components/ContactsBook' /* webpackChunkName: "contacts-book" */));
const HomePage = lazy(() => import('./Pages/HomePage' /* webpackChunkName: "home-page" */));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container>
        <Suspense fallback={<p>Загружаем</p>}>
          <AppBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <PublicRoute exact path='/registration' restricted redirectTo='/'>
              <Registration />
            </PublicRoute>
            <PublicRoute exact path='/login' restricted redirectTo='/'>
              <Login />
            </PublicRoute>
            <PrivateRoute path='/contactsbook'>
              <ContactsBook />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}
