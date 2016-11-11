var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/weather',function(req, res, next){
	req.name = req.body.name;
	next()
});

router.post('/weather', function(req, res) {
	var user = {};
	user.authorised = req.name == '' ? false :true;
	user.name = req.name;
	res.render('weather', user);
});


router.get('/weather/:key', function(req, res){
	var name = req.params.key;
	var user = {};
	user.authorised = name == '' ? false:true;
	user.name = name;
	res.render('weather', user);
});


module.exports = router;
