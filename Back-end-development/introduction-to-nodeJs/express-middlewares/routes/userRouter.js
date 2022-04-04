const router = require('express').Router();

const {
  validationUsername,
  validationPassword,
  validationEmail,
} = require('../middlewares/userMiddleware');

router.post('/register', validationEmail, validationPassword, validationUsername, (_req, res) => {
  res.status(201).json({ message: 'user created' });
})

router.post ('/login', validationEmail, validationPassword, (_req, res) => {
  res.status(200).json({ token: '86567349784e'})
})

module.exports = router;