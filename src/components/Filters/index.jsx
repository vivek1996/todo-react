import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../pages/todo/todoSlice';
import './styles.scss';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterSelect = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className="radio-group">
      <input
        type="radio"
        id="option-one"
        name="filter-type"
        value="all"
        defaultChecked
        onChange={handleFilterSelect}
      />
      <label htmlFor="option-one">All</label>
      <input
        type="radio"
        id="option-two"
        value="active"
        name="filter-type"
        onChange={handleFilterSelect}
      />
      <label htmlFor="option-two">Active</label>
      <input
        type="radio"
        id="option-three"
        value="completed"
        name="filter-type"
        onChange={handleFilterSelect}
      />
      <label htmlFor="option-three">Completed</label>
    </div>
  );
};

export default Filters;
