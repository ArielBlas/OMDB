const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const usersRoutes = require('./users');
const favouriteRoutes = require('./favourite')

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/favourite', favouriteRoutes)

module.exports = router;
