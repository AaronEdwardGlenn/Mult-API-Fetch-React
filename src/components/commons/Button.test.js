import React from 'react';
import { shallow } from 'enzyme'
;
import Button from './Button';

describe('our button component', () => {
  it('can match the snap', () => {
    const wrapper = shallow(<Button text="BUTT" />);
    expect(wrapper).toMatchSnapshot();
    
  });
  it('can match the snap with a prop passed', () => {
    const wrapper = shallow(<Button text="COOL" value="BUTT" />);
    expect(wrapper).toMatchSnapshot();
  }); 
})
;
