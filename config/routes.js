const axios = require('axios');
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig');

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

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

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
