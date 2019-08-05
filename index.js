var http = require('http');
var fs = require('fs');
var cors = require('cors')
var path = require('path');    
var express = require("express");
var bodyParser = require("body-parser");
var watch = require('node-watch');
const request = require('request');
var localStorage = require('localStorage');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));

/*watch('C:\\batch\\pass.txt', { recursive: true }, function(evt, name) {
    console.log('%s changed.', name);
    request('http://localhost:9000/setCookie', function (error, response, body) {
       
     console.log("...."+response);
     process.exit()
      });
  });*/
var routes = require("./routes/routes.js")(app);

var server = app.listen(9000, function(){
   
});