const express = require('express');
const router = express.Router();
const { Favourite } = require('../models')

router.get("/:userId", (req, res) => {
    Favourite.findAll({
      where: {
        userId: req.params.userId,
      },
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then(favs => {
      res.send(favs)
    })
});

router.post("/", (req, res) => {
  Favourite.create(req.body)
  .then(favs => {
    res.send(favs)
  })
});

router.delete('/:id', (req, res) => {
  Favourite.destroy({
    where :{
      id: req.params.id
    }
  })
  .then(fav => {
    res.sendStatus(201)
  })
})

module.exports = router;