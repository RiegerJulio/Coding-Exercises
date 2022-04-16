const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const secret = 'pfvrnaomehackeia';

const validateJWT = async(req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ where: { username: decoded.data.username } });
    if (!user) return res.status(401).json({ message: 'User not found' });
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  };
};

module.exports = validateJWT;
