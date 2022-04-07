const cepServices = require('../services/cepServices');
const rescue = require('express-rescue');
const Joi = require('joi');

const findByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await cepServices.findByCep(cep);

  if (address.error) {
    return next(address.error);
  } return res.status(200).json(address);
});

const createCep = rescue(async (req, res, next) => {
  const requireString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requireString,
    bairro: requireString,
    localidade: requireString,
    uf: requireString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await cepServices.createCep(req.body);

  if (newCep.error) {
    return next(newCep.error);
  }

  res.status(201).json(newCep);
});

module.exports = {
  findByCep,
  createCep,
};
