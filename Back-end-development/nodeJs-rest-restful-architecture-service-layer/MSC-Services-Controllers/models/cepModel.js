const connection = require('./connections');

const REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  if (REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const cepExibition = ({ cep, logradouro, bairro, localidade, uf}) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findByCep = async (cep) => {
  const removeFormatting = cep.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const result = await connection.execute(query, [removeFormatting])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;
  return cepExibition(result);
};

module.exports = {
  findByCep,
};