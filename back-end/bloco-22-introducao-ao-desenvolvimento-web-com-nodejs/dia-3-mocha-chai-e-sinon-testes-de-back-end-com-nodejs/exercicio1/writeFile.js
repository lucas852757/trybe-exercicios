const fs = require('fs');

const writeFile = (file, contetOfFile) => {
  try {
    const content = fs.writeFileSync(`../${file}`, contetOfFile);
    return 'ok';
  } catch (error) {
    return(error);
  }
}

module.exports = writeFile;
