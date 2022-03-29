<h1> Exercicios 22.1 </h1>

Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . Realize os exercícios dentro desse pacote.

1 - Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
  - A fórmula para calcular o IMC é peso / altura ^ 2 . Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
  - Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
  - Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
  - Armazene o script no arquivo imc.js .
  - Agora, permita que o script seja executado através do comando npm run imc
  - O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .
  - Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
  - Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
  - Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
  - Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
  - O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
  - Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .
  - Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria ele se enquadra

2 - Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida
  - A fórmula para calcular velocidade média é distância / tempo .
  - Armazene o script no arquivo velocidade.js.
  - Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a chave velocidade dentro do objeto scripts no package.json .
  - Utilize o readline-sync para solicitar os dados à pessoa.
  - Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.

3 - Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
  - O script deve ser executado através do comando npm run sorteio .
  - Utilize o readline-sync para realizar input de dados.
  - Armazene o script em sorteio.js .
  - O número gerado deve ser um inteiro entre 0 e 10.
  - Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
  - Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez.