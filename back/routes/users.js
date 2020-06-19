const express = require('express');
const router = express.Router();
const { User, Favourite } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
  User.findAll()
  .then(user => {
    res.send(user)
  })
})

router.post('/search', (req, res) => {
  User.findAll({
    where: {
      name: {
        [Op.like]: `%${req.body.name}%`
      }
    }
  })
  .then(user => {
    res.send(user)
  })
})

router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.sendStatus(401); 
  }
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(user => {
    res.send(user)
  })
})


module.exports = router;