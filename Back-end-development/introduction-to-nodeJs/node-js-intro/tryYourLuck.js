const readlineSync = require('readline-sync');

const tryYourLuck = () => {
  const number = readlineSync.questionInt("Try to Guess the Number im Thinking between 1 and 10");
  const random = parseInt(Math.random() * 10);

  return number === random ? console.log('Wow, you did it') : console.log('You have Failed! Try Again')
}

tryYourLuck();