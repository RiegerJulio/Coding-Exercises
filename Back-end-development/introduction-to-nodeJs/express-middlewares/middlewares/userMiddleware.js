const validationUsername = (req, res, next) => {
  const { username } = req.body;

  if(!username || username.length < 3)
  return res.status(400).json({ message: 'invalid data'});

  next();
}

const validationEmail = (req, res, next) => {
  const { email } = req.body
  
  if(!email || !email.includes('@') || !email.includes('.com'))
  return res.status(400).json({ message: 'invalid data'});

  next();
}

const validationPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/

  if(password.length < 3 || password.length > 8 || !password.match(passwordRegex))
  return res.status(400).json({ message: 'invalid data'});

  next();
}

module.exports = {
  validationUsername,
  validationPassword,
  validationEmail,
};