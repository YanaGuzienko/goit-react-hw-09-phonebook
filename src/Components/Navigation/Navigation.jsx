import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userSelector, authOperations } from '../../redux/auth';

import scss from './Navigation.module.scss';

const Navigation = ({ isAuthenticated, logOut }) => {
  return (
    <>
      <nav className={scss.navigation}>
        <ul className={scss.list}>
          <NavLink className={scss.link} exact to={{ pathname: '/' }} activeClassName={scss.active}>
            <li className={scss.item}>Главная</li>
          </NavLink>
          {isAuthenticated && (
            <NavLink className={scss.link} exact to={{ pathname: '/contactsbook' }} activeClassName={scss.active}>
              <li className={scss.item}>Контакты</li>
            </NavLink>
          )}
        </ul>
        {isAuthenticated && (
          <NavLink to='/'>
            <button type='button' className={scss.button} onClick={logOut}>
              Выйти
            </button>
          </NavLink>
        )}
      </nav>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: userSelector.getToken(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
