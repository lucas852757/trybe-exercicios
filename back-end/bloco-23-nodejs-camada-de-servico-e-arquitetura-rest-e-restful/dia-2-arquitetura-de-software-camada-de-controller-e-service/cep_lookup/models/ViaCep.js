const axios = require('axios');
const lookupCep = async (cepToLookup) => {
  const {data} =  await axios.get(`https://viacep.com.br/ws/${cepToLookup}/json/`);
if(data.erro) return null;
return data;
};

module.exports = {
  lookupCep,
};