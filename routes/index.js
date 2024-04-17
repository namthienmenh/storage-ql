var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/error', (req, res, next) => {
  throw new Error('Test error');
});

module.exports = router;
