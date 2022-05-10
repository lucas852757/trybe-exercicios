/* 
Crie um endpoint GET /simpsons 🚀

O endpoint deve retornar um array com todos os simpsons. */

const express = require('express');
const bodyParser = require('body-parser');
const functions = require('./functions');
const app = express();

app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
  try {
    const response  = await functions.readFile();
 
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).end();
  }
});


/* Crie um endpoint GET /simpsons/:id 🚀

    O endpoint deve retornar o personagem com o id informado na URL da requisição.
    Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found . */

app.get('/simpsons/:id', async (req, res) => {
  try {
    const {id} = req.params;
  const response  = await functions.readFile();
  f = response.find((r) => r.id === id);
  if(!f) return res.status(404).json({ message: 'simpson not found' });
  return res.status(202).json(f);

  } catch (error) {
    res.status(500).end()
  }
});


/* Crie um endpoint POST /simpsons . 🚀

    Este endpoint deve cadastrar novos personagens.
    O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
    Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
    Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); . */


app.post('/simpsons',async (req, res) => {
  try {
    const {id, name} = req.body;
    const pepole = await functions.readFile();
    const index = pepole.findIndex((r) => r.id === id);
    if(index === -1) {
      pepole.push({id, name});
      await functions.write(pepole);
      return res.status(204).end();
    }
    return res.status(409).json({message: 'id already exists'});

  } catch (error) {
    res.status(500).end();
  }
  
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});