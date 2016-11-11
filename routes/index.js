var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Node demo' });
});

// Middleware function for catching the name
router.use('/data',function(req, res, next){
	req.name = req.body.name;
	next()
});

// Route for Post request
router.post('/data', function(req, res) {
	var user = {};
	user.authorised = req.name == '' ? false :true;
	user.name = req.name;
	res.render('data', user);
});


// Route demonstrating url parameter use
router.get('/data/:key', function(req, res){
	var name = req.params.key;
	var user = {};
	user.authorised = name == '' ? false:true;
	user.name = name;
	res.render('data', user);
});


module.exports = router;
