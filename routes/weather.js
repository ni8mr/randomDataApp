var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res){
	var user = {
		authorised: false
	};
	res.render('weather', user);
});


module.exports = router;
