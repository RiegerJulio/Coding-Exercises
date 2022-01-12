const ESTADO_INICIAL = { 
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 2 - Crie um reducer, implementando um switch retornando apenas o estado inicial como default . Não se esqueça de colocar o reducer como parâmetro para o createStore , feito na etapa anterior.
// 3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e PREVIOUS_COLOR . Essas actions devem alterar o valor index guardado no ESTADO_INICIAL . Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
    default: return state;
  }
}

// 1 - Crie uma store para a nossa aplicação.

const store = Redux.createStore(reducer);