import { connect } from 'react-redux';
import { onFilterChange } from '../../redux/form-contacts';

import scss from './Filter.module.scss';

function Filter({ onFilterChange }) {
  const filterChange = (e) => {
    const { name, value } = e.currentTarget;
    onFilterChange(name, value);
  };

  return (
    <div className={scss.container}>
      <label className={scss.filter}>
        Find contacts by name
        <input type='text' name='filter' onChange={filterChange} className={scss.input}></input>
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (name, value) => dispatch(onFilterChange(name, value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
