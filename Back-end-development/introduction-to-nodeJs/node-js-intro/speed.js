const readlineSync = require('readline-sync');

const calcSpeed = () => {
  const distance = readlineSync.questionInt('What is the distance you did in meters?');
  const time = readlineSync.questionInt('What is the time spent in seconds?');

  const medSpeed = (distance / time).toFixed(2);

  console.log(`Your speed was ${medSpeed} m/s`);
}

calcSpeed();