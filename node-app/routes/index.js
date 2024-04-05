var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/pid", function(req, res, next) {
  const array = [];
  res.send("Hi! my process id is: " + process.pid + " || HOSTNAME: " + process.env.HOSTNAME);
})

router.get("/sleep5sec", function(req, res, next) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + 5000) {
      ;
  }
  res.send("Finished sleeping... || HOSTNAME: " + process.env.HOSTNAME);
})

module.exports = router;
