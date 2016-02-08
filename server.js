var express = require('express');
var app = express();

var user = require('./model/user');
var userRouter = require('./controllers/userRouter');

var expressLayouts = require('express-ejs-layouts');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use('/users', userRouter);
app.use(express.static(__dirname + '/public'));

app.listen('3000', function(){
  console.log('Running on port 3000'); 
});
