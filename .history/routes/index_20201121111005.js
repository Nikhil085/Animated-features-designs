var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/Loader', function(req, res){
  res.render('Loader')
});

router.get('/button', function(req, res){
  res.render('button')
});

router.get('/profile', function(req, res){
  res.render('profile')
});

router.get('/slider', function(req, res){
  res.render('slider')
});

router.get('/slider2', function(req, res){
  res.render('slider2')
});

router.get('/slider3', function(req, res){
  res.render('slider3')
});

router.get('/button2', function(req, res){
  res.render('button2')
});

router.get('/button3', function(req, res){
  res.render('button3')
});

module.exports = router;
