const readlineSync = require('readline-sync');

const calcImc = () => {
  const heigth = readlineSync.questionFloat('What is your heigth?');
  const weigth = readlineSync.questionInt('What is your weigth?');

  const calc = (weigth / Math.pow(heigth / 100, 2)).toFixed(2);
  console.log(`This is your IMC: ${calc}`);
  
  if (calc < 18.5) console.log('You are thin. Better eat more sandwiches :D');
  if (calc >= 18.5 && calc < 25) console.log('Dont worry, You are OK. Keep going.');
  if (calc >= 25 && calc < 30) console.log('You better watch yourself man!');
  if (calc >= 30 && calc < 35) console.log('Bro, you should see a doctor'); 
  if (calc > 35) console.log('You need to see a doctor NOW!');
}

calcImc();