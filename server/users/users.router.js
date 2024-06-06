const express = require('express');
const { fetchAllUsers, fetchUserById } = require('./users.service');

const router = express.Router();

router.get('/all', async (req, res) => {
  const users = await fetchAllUsers();

  res.json(users);
});
router.get('/userById/:id', async (req, res) => {
  try {
    const user = await fetchUserById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(`Error fetching user with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

module.exports = router;
