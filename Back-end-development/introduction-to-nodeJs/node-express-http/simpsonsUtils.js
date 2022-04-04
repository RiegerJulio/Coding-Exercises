const fs = require('fs/promises');

const getSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

const setSimpsons = (newChar) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(newChar));
}

module.exports = { getSimpsons, setSimpsons }