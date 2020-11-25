import React from 'react';
import './styles.scss';

const Filters = () => {
  return (
    <div className="radio-group">
      <input type="radio" id="option-one" name="selector" defaultChecked />
      <label htmlFor="option-one">All</label>
      <input type="radio" id="option-two" name="selector" />
      <label htmlFor="option-two">Active</label>
      <input type="radio" id="option-three" name="selector" />
      <label htmlFor="option-three">Completed</label>
    </div>
  );
};

export default Filters;
