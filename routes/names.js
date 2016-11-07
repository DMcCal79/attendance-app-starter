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
  const newName = [];
  names.forEach(function(robot) {
    newName.push(robot.transformer);
    //This will push the values of the transformer key to an array
    if (robot.transformer === name) {
      robot.attended ++;
    //If the name entered matches one of the existing names then their attendance will be increased by one.
    }
   });
    if (newName.indexOf(name) === -1) {
      names.push({transformer: name, attended: 1});
    //If the name entered is not in newName array then they will be added to the attendance roster (names array).
    }

  res.redirect('/names');
});

module.exports = router;
