const cepModel = require('../models/cepModel');

const REGEX = /\d{5}-?\d{3}/;

const findByCep = async (searchCep) => {
  if (!REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP invalido',
      }
    }
  }
  const cep = await cepModel.findByCep(searchCep);

  if(!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }
  return cep;
};

module.exports = {
  findByCep,
}