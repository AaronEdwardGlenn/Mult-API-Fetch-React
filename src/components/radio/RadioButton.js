import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

const RadioButton = ({ label, name, onChange, value }) => (
  <div className={styles.RadioButton}> 
    <input id={value}  value={value} type="radio" name={name} onChange={onChange} />
    <label htmlFor={value}>{label}</label>

  </div>
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
