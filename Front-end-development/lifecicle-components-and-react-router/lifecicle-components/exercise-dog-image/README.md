#### Exercício 1

Crie uma aplicação que consuma a API de fotos aleatórias de cachorros. Use a [dog.ceo](https://dog.ceo/dog-api/). Para refrescar a memória acerca de como fazer requisições, revisite [o conteúdo sobre Promises](https://app.betrybe.com/course/fundamentals/js-asynchronous/promises) ou [consulte a documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)!

Observe a estrutura de dados que a API retorna:

```bash 
  {
    "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
    "status": "success"
  }
```
  -  Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;

  -  Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;

  -  Deve existir um botão que, para cada clique, busque mais um doguinho.


#### Exercício 2

Com o código do exercício anterior, você irá implementar mais algumas funcionalidades:

-  A cada tentativa de atualização do componente, verifique se o campo message tem a palavra terrier. Se sim, não atualize o componente. Pesquise pelo método includes;

-  Guarde a url da última imagem gerada no localStorage após cada atualização.

-  Após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message);
