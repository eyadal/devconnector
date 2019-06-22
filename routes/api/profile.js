const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route       GET api/profile/me
// description  Get current users profile
// access       Private
router.get('/', auth, (req, res) => res.send('Profile route'));

module.exports = router;
