var express = require('express');
var router = express.Router();

router.get('/:date', function(req, res, next) {

  var unix;
  var natural;

  if ((/^[0-9]{1,12}/).test(req.params.date)) {
    unix = new Date(parseInt(req.params.date)).getTime();
    natural = new Date(unix).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    res.json({ 'unix': unix, 'natural': natural });
  } else if (new Date(req.params.date) != 'Invalid Date') {
    natural = new Date(req.params.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    unix = new Date(natural).getTime();
    res.json({ 'unix': unix, 'natural': natural });
  } else {
    res.json({ 'unix': null, 'natural': null });
  }

});

module.exports = router;