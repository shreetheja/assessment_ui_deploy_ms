const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public-flutter')));

app.listen(80,()=>{console.log('Listening at 80');});
app.get("*",(req,res)=>{
    //res.redirect("https://users.examvedha.com/");
})
module.exports = app;
