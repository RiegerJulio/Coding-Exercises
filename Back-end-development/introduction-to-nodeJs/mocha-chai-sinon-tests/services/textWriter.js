const fs = require('fs');

const textWriter = (name, content) => {
  fs.writeFileSync(`${__dirname}/${name}` , content);

   return 'ok';
}

module.exports = {
  textWriter,
}