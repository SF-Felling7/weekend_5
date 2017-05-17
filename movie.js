//REQUIRES
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var port = process.env.PORT || 4379;

//USES
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//CREATE MONGODB

mongoose.connect('localhost:27017/movieCollection');

//CREATE MONGOOSE SCHEMA

var movieSchema = mongoose.Schema({
    title: String,
    year: Number,
    poster: String
});

var movies = mongoose.model('movies', movieSchema);


//INITIAL GET, SERVER INDEX FILE
app.get('/', function(req, res) {
    console.log('hit base url!');
    res.sendFile(path.resolve('./public/views/index.html'));
});

app.post('/postFav', function(req, res) {
    console.log('hit post');
    console.log('req.body =', req.body);
    var newMovie = movies(req.body);
    newMovie.save().then(function() {
        res.sendStatus(200);
    });

});

app.get( '/appendFav', function( req, res ) {
console.log( 'hit  appendFave route' );
  movies.find({}, function(err, results) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful get heros ->', results);
      res.status(200).send(results);
    }
  });
});


app.listen(port, function() {
    console.log('listening on port:', port);
});
