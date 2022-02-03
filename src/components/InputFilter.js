import React from 'react';
import PropTypes from 'prop-types';

import '../styling/InputFilter.css';

const InputFilter = ({ filter, onChange }) => (
  <div className="search">
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search Country..."
    />
  </div>
);

InputFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFilter;
