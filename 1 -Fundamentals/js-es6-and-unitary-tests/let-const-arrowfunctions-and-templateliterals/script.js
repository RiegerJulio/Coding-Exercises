// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const oddsAndEvensReturn = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

// const newOrder = oddsAndEvensReturn();

// console.log(`the numbers ${newOrder} are in normal order`);

const longestWord = (text) => {
  let wordCutted = text.split(' ');
  let biggerWord = 0
  let result = '';

  for (const word of wordCutted) {
    if(word.length > biggerWord) {
      biggerWord = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord("gilson freitas perfeito lindo demais"));
