const express = require('express');
const router = express.Router();

// @route       GET api/users
// description  test route
// access       public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
