const checkNumber = (num) => {
  if (typeof num !== 'number') {
    return 'it must be a number'
  }
  if(num > 0) {
    return 'Positive';
  }
  if(num < 0) {
    return 'Negative';
  }
  return "Neutral";
}

// console.log(checkNum(5));


module.exports = {
  checkNumber,
}