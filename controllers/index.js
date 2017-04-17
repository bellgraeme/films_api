var express = require('express');
var router = new express.Router();

router.use('/films', require('./films.js'));
// router.use('/dogs', require('./dogs'));

//Create routes using the object
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,  '..', '/client/build/index.html'));

});

module.exports = router