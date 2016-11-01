const express = require('express');

const router = express.Router();

const names = [
  {transformer: 'Bumblebee', attended: 0},
  {transformer: 'Optimus Prime', attended: 0},
  {transformer: 'Ratchet', attended: 0},
  {transformer: 'Soundwave', attended: 0},
  {transformer: 'Megatron', attended: 0}
];


router.get('/', function (req, res, next) {
  res.render('index.ejs', { names: names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  names.forEach(function(robot) {
    if (robot.transformer === name) {
      robot.attended ++;
    }
  })

  res.redirect('/names');
});

module.exports = router;
