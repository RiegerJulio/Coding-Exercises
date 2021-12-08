const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
.then((response) => response.json())
.then((data) => data.data)
.catch((error) => error.toString());

return coins;
}

const coinsOnScreen = async () => {
  const coins = await fetchCoins();

  const putOnHtml = document.querySelector('#list-coins');

  coins.filter((coin) => Number(coin.rank) <= 10).forEach((coin) => {
    const createLI = document.createElement('li');
    const dolPrice = Number(coin.priceUsd);
    createLI.innerText = `${coin.name} ${coin.symbol}: ${dolPrice.toFixed(2)}`;
    putOnHtml.appendChild(createLI);
  });
}

window.onload = () => coinsOnScreen();
