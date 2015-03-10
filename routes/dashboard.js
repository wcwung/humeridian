var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/dashboard', function(req, res) {
  res.render('index', { title: 'Humeridian – Visualize Your Health' });
});

module.exports = router;
