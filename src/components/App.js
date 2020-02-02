import React from 'react';
import Quote from './quotes/Quote';
import Button from './commons/Button';
import RadioButton from './radio/RadioButton';
import RadioButtons from './radio/RadioButtons';


export default function App() {
  const radioButtons = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' }
  ];
  return (
    <RadioButtons
      radioButtons={radioButtons}
      name="colors"
      onChange={({ target }) => console.log(target.value)} />
  ); 
}
