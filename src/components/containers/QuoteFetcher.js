import React, { Component } from 'react';
import { getRonQuote } from '../../services/quotesAPI';
import Quote from '../quotes/Quote';
import RadioButtons from '../radio/RadioButtons';
import Button from '../commons/Button';

const quoteProviderFactory = {
  ron: getRonQuote
};

export default class QuoteFetcher extends Component {
    state = {
      quoteProvider: 'simpsons', 
      quote: { text: '', name: '', img: '' }
    }

    changeQuoteProvider = (event) => {
      this.setState({ quoteProvider: event.target.value });
    }

    componentDidMount() {
      this.fetch(); 
    }

    fetch = () => {
      return quoteProviderFactory[this.state.quoteProvider]
        .then(quote => this.setState({ quote }));
    }
    

    render() {
      const { quote } = this.state;
      const radioButtons = [
        { label: 'Ron Swanson', value: 'Ron' }


          
      ];
      return (
        <div>
          <RadioButtons radioButtons={radioButtons} name="Quote Provider" onChange={this.changeQuoteProvider} />
          <Quote {...quote} />
          <Button text="Get a new quote" onClick={this.fetch}/> 
                
        </div>
      );
    }
}
