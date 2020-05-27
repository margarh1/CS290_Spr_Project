console.log('Hello world');

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('home');
});

app.get('/people', function(req, res){
  res.render('people');
});

app.get('/nature', function(req,res){
  res.render('nature');
});

app.get('/space', function(req,res) {
  res.render('space');
});

app.get('/contact', function(req,res) {
  res.render('contact');
});

app.get('/credits', function(req,res){
  res.render('credits');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on flip1.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl+C to terminate.');
});