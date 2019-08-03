import React from 'react';



export async function _getMovies() {
    return fetch('https://facebook.github.io/react-native/movies.json')
     .then((response) => response.json())
     .catch((error) => {
       console.error(error);
     });
  }; 


  export async function _fetchImages() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
     .then((response) => response.json())
     .catch((error) => {
       console.error(error);
     });
  }; 


  export async function _fetchCrypto() {
    return fetch ('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,EOS,BCH,XRP,BGG &tsyms=USD')
    .then((response) => response.json())
    .catch ((error) => {console.error(error)})
  }


  export async function _fetchAll() {
    return fetch ('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
    .then((response) => response.json())
    .catch ((error) => {console.error(error)})
  }
