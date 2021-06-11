import { connect } from 'react-redux';
import { userSelector } from '../../redux/auth';

import scss from './ForLoginUser.module.scss';

const ForLoginUser = ({ name }) => {
  return (
    <>
      <div className={scss.container}>
        <h1>Welcome, {name}</h1>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: userSelector.getName(state),
});

export default connect(mapStateToProps)(ForLoginUser);
