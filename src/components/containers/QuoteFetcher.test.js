import React from 'react';
import { shallow } from 'enzyme';
import QuoteFetcher from './QuoteFetcher';

jest.mock('../services/quotesAPI.js'); 

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
  it('fetches from the correct API based on quoteProvider func', () => {
    const wrapper = shallow(<QuoteFetcher />); 
    const quoteFetcher = wrapper.instance(); 
    
    wrapper.setState({ quoteProvier: 'ron' })

    quoteFetcher.fetch(); 
  });
  expect(wrapper.state('quote').toEqual({
      text: 'Cool', 
      name: 'Quote', 
      img: 'asdf/asdf/cool.png'
    });
});



