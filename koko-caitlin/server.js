'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/.data/hackerIpsum.json', function(req,res){
  res.sendFile('./public/index.html');
});

app.listen(PORT, function(){
  console.log(`App listening on Port: ${PORT}`);
});

app.get('/new',(req,res)=>{
  res.sendFile('./public/new.html');
});


app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use(function (req,res) {
  res.status(404).send('Error');
});

