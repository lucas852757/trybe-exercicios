const fs = require('fs').promises;


  const readFile = async () => {
    const content = await fs.readFile('./simpsons.json', 'utf-8');
      return JSON.parse(content);
    }
  

 const write = async (something) => {
   const content = await fs.writeFile('./simpsons.json', JSON.stringify(something));
  return content;
} 

module.exports = {
  readFile,
  write,
}