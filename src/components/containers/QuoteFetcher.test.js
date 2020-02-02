import React from 'react';
import { shallow } from 'enzyme';
import QuoteFetcher from './QuoteFetcher';

describe('quote fetch container', () => {
  it('changes quote providers', () => {
    const wrapper = shallow(<QuoteFetcher />);
    const quoteFetcher = wrapper.instance(); 

    quoteFetcher.changeQuoteProvider({
      target: {
        value: 'futurama'
      }
    });
    expect(wrapper.state('quoteProvider')).toEqual('futurama');
  });
});



