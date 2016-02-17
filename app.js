var fs = require("fs");
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var JSONObj = [

	{
    location: 'Seville',
    nextLocation: 'Canary Islands'
	},
	{
    location: 'Canary Islands',
    nextLocation: 'Cape Verde'
	},
	{
    location: 'Cape Verde',
    nextLocation: 'Strait of Magellan'
	},
	{
    location: 'Strait of Magellan',
    nextLocation: 'Guam'
	},
	{
    location: 'Guam',
    nextLocation: 'Philippines'
	},
	{
    location: 'Philippines',
    nextLocation: '...He Died Here'
	},

]

// Routes \\

// Home Page \\

app.get("/", function(req, res) {
	res.sendFile("seville.html", {root : "./public/html"})
})

// Canary Islands \\

app.post("/canaryIslands", function(req, res){
	res.redirect("/public/html/canaryislands")
})

app.get("/public/html/canaryislands", function(req, res){
	res.sendFile("canaryislands.html", {root : "./public/html"})
});

// Cape Verde \\

app.post("/capeVerde", function(req, res){
	res.redirect("/public/html/capeverde")
})

app.get("/public/html/capeverde", function(req, res){
	res.sendFile("capeverde.html", {root : "./public/html"})
});

// Strait of Magellan \\

app.post("/straitOfMagellan", function(req, res){
	res.redirect("/public/html/straitofmagellan")
})

app.get("/public/html/straitofmagellan", function(req, res){
	res.sendFile("straitofmagellan.html", {root : "./public/html"})
});

// Guam \\

app.post("/guam", function(req, res){
	res.redirect("/public/html/guam")
})

app.get("/public/html/guam", function(req, res){
	res.sendFile("guam.html", {root : "./public/html"})
});

// Philippines \\

app.post("/philippines", function(req, res){
	res.redirect("/public/html/philippines")
})

app.get("/public/html/philippines", function(req, res){
	res.sendFile("philippines.html", {root : "./public/html"})
});

// Next Route \\

app.post("/tellme", function(req, res) {
	console.log("Working")
	res.redirect("/next")
})

app.get("/next", function(req, res){
	res.send("Workinggggg")
});

// Error Handling \\

app.use(function(req, res, next) {
  res.send("Magellan never traveled there...")
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})