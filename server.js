var express = require('express');
var path = require('path');

//Create app and OPENshift variables
var app = express();
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var S_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

//assign static path command to listen for incoming
app.use(express.static(path.join(__dirname + '/public')));
app.listen(PORT,S_IP, function(){
     console.log('Listening on ' + PORT + ' : (HOST) ' + S_IP);
});

//display profile page
app.get('/', function(req,res){
     res.sendFile('/public/index.html');
});
