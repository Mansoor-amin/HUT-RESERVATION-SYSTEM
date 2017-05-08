// start dependencies require
const express = require('express');
const path = require('path');
const http = require('http');
const bodyPaerser = require('body-parser');
var mongoose = require('mongoose');

// end of dependencies require
mongoose.connect('mongodb://localhost/hutReservationSystem');

// get our api routes
const api = require('./server/routes/api');
const general = require('./server/routes/general');

const app = express();

// parser for get data
app.use(bodyPaerser.json());
app.use(bodyPaerser.urlencoded({extended: false}));

// Points static path to dist
app.use(express.static(path.join(__dirname,'dist')));
app.use(general);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

// get port from envoirment adn store in express.

const port = process.env.PORT || '3000';
app.set('port',port);

// creating http server 

const server = http.createServer(app);

// Listen on provided port, on all network interfaces.

server.listen(port,()=>{
    console.log(`api running on localhost:${port}`);
})