export const getRonQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')
    .then(res => res.json())
    .then(([text]) => ({
      text,
      img: 'http://placekitten.com/200/300'
    }));
}; 

export const getFuturamaQuote = () => {
    
};

