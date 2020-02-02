import React, { Component } from 'react';

export default class QuoteFetcher extends Component {
    state = {
      quoteProvider: 'simpsons', 
      quote: { text: '', name: '', img: '' }
    }

    changeQuoteProvider = (event) => {
      this.setState({ quoteProvider: event.target.value });
    }

    render() {
      return (
        <div>
              Placeholder  
        </div>
      );
    }
}
