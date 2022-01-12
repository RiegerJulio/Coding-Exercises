const ESTADO_INICIAL = { 
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 1 - Crie uma store para a nossa aplicação.

const store = Redux.createStore(reducer);