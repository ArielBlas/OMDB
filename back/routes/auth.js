const express = require('express');
const router = express.Router();
const { User } = require('../models/index')
const passport = require('passport')


router.post("/register", (req, res) => {
    User.create(req.body)
      .then(user => {
        res.status(201).send(user);
      })
      .catch(err => {
        res.sendStatus(400);
      });
});
  
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user);
});

router.get("/logout", (req, res) => {
    req.logout();
    res.sendStatus(204); 
});



module.exports = router;
