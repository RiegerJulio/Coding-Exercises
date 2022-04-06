const connection = require('./connection');

const userFormatting = ({ id, firstName, lastName, email, password }) => {
  return {
    id,
    firstName,
    lastName,
    email,
    password,
  };
};

const serialize = (userFormatting) => {
  return {
    id: userFormatting.id,
    firstName: userFormatting.first_name,
    lastName: userFormatting.last_name,
    email: userFormatting.email,
    password: userFormatting.password,
  }
}

const validation = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || !email.includes('@') || !email.includes('.com')) return false;
  if (!password || password.length < 6) return false;

  return true;
}

const getUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users.map(serialize).map(userFormatting);
} 

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);
  return ({ id: result.insertId, firstName, lastName, email, password });
};

module.exports = {
  createUser,
  getUsers,
  validation,
}