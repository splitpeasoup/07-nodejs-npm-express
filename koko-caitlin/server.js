'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/.data/hackerIpsum.json', function(req,res){
  res.sendgFile('./public/index.html');
});

app.listen(3000, function(){
  console.log('sweetcode app listening on port 3000');
});

app.get('/new',(req,res)=>{
  res.sendfile('public/new.html');
});

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use(function (req,res) {
  res.status(404).send('Error');
});

