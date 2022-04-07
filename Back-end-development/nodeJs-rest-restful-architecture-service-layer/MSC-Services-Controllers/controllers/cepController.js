const cepServices = require('../services/cepServices');
const rescue = require('express-rescue');

const findByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await cepServices.findByCep(cep);

  if (address.error) {
    return next(address.error);
  } return res.status(200).json(address);
});

module.exports = {
  findByCep,
};
