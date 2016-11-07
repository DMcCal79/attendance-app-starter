const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const names = require('./routes/names');

const app = express();


app.use(express.static('css'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/names', names);
app.get('/*', function(req, res, next) {
  res.redirect('/names');
});











const port = 3000;

app.listen(port, function () {
  console.log(`Listening on port: ${port}`);
});
