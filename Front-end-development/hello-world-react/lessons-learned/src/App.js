import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
    </div>
  )
}

export default App;


// Exercícios:

// 3. Crie um novo projeto utilizando npx create-react-app.
// Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;
// No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
// No arquivo App.js , importe o componente Header criado anteriormente;
// Renderize o componente Header no App.js ;
// Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;
// Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;
// Ainda no arquivo Content.jsx , adicione o seguinte array:
// Exporte o componente Content ;
// No arquivo App.js , importe o componente Content criado anteriormente;
// Renderize o componente Content no App.js ;
// Crie um novo arquivo Footer.jsx ;
// No arquivo Footer.jsx , crie uma classe chamada Footer .
// A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
// Importe o componente Footer no app.js
// Renderize o componente Footer no app.js .