import React from 'react';

function Task(value) {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Cold Shower', 'Breakfast', 'Reading', 'Study', 'Launch'];


class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((tasks) => Task((tasks))) }</ul>
    );
  }
}
export default App;

// Exercicios:
// 1- insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :
// 2- agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
// 3- por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .