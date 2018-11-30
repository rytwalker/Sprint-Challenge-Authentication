const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../_secrets/keys').jwtKey;

const db = require('../database/dbConfig');

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username
  };
  const secret = jwtSecret;
  const options = {
    expiresIn: '5m'
  };
  return jwt.sign(payload, secret, options);
}

async function register(req, res) {
  // implement user registration
  const registrationData = req.body;

  if (!registrationData.username || !registrationData.password) {
    return res
      .status(400)
      .json({ message: 'Please enter a valid username and password.' });
  }

  const hash = bcrypt.hashSync(registrationData.password, 8);
  registrationData.password = hash;

  try {
    const userId = await db('users').insert(registrationData);
    res.status(201).json(userId);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong registering.' });
  }
}

async function login(req, res) {
  // implement user login
  const loginData = req.body;

  if (!loginData.username || !loginData.password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  }

  try {
    const user = await db('users')
      .where({ username: loginData.username })
      .first();
    if (user && bcrypt.compareSync(loginData.password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome ${user.username}`, token });
    } else {
      res.status(401).json({ message: 'That password does not match.' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Something went wrong logging in to get dad jokes.' });
  }
}

function getJokes(req, res) {
  axios
    .get('https://safe-falls-22549.herokuapp.com/random_ten')
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
