var express = require('express');
var router = express.Router();

/* Second page */
router.get('/', function(req, res, next) {
  res.render('secondPage');
});

module.exports = router;