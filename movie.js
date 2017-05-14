//REQUIRES
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );


var port = process.env.PORT || 4379;

//USES
app.use(express.static( 'public' ) );
app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());

//CREATE MONGODB

// mongoose.connect( 'localhost:27017/movieCollection' );
//
// //CREATE MONGOOSE SCHEMA
//
// var movieSchema = mongoose.Schema({
//   title: STRING,
//   year: NUMBER,
//   rated: STRING,
//   poster:STRING
// });
//
// var movies = mongoose.model( 'movies', movieSchema );


//INITIAL GET, SERVER INDEX FILE
app.get( '/', function( req, res ) {
  console.log( 'hit base url!');
  res.sendFile( path.resolve( './public/views/index.html' ) );
});



app.listen( port, function() {
  console.log( 'listening on port:', port );
});
