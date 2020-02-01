import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('quote matches the snap', () => {
    const wrapper = shallow(<Quote text="calvin" name="coolidge" img="yah/brah/img" />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
