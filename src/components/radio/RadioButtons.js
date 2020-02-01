import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ label, name, onChange, value }) => (
  <> 
    <input id={value} type="radio" name={name} onChange={onChange} />
    <label htmlFor={value}>{label}</label>

  </>
); 

RadioButton.propTypes = {
  label: 
    PropTypes.string.isRequired, 
  onChange: 
    PropTypes.func.isRequired,
  name: 
  PropTypes.string.isRequired,
  value: 
  PropTypes.string.isRequired
};

export default RadioButton; 
