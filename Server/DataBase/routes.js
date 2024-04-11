const express = require('express');
const router = express.Router();
const { getUsers } = require('./dataAccess');


router.get('/users', (req, res) => {
  getUsers((err, users) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch users' });
      return;
    }
    res.json(users);
  });
});

module.exports = router;