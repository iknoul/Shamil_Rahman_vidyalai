const express = require('express');
const { fetchAllUsers } = require('./users.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await fetchAllUsers();

  res.json(users);
});

module.exports = router;
