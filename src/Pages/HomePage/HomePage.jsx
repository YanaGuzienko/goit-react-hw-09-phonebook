import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userSelector } from '../../redux/auth';
import ForLoginUser from '../../Components/ForLoginUser';

import scss from './HomePage.module.scss';

const HomePage = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <ForLoginUser />
      ) : (
        <div className={scss.container}>
          <p className={scss.text}>
            Если у Вас уже есть книга контактов{' '}
            <NavLink className={scss.linkLogin} to={{ pathname: '/login' }}>
              Войдите
            </NavLink>{' '}
            .
          </p>
          <p className={scss.text}>
            Если у Вас еще нет аккаунта{' '}
            <NavLink className={scss.linkRegistr} to={{ pathname: '/registration' }}>
              Зарегестрируйтесь
            </NavLink>
            .
          </p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: userSelector.getToken(state),
  };
};

export default connect(mapStateToProps)(HomePage);
