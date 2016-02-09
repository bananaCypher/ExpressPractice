var express = require('express');
var userRouter = express.Router();
var user = require('./../model/user');
var bodyParser = require('body-parser');
userRouter.use(bodyParser.urlencoded({ extended: false }));

userRouter.get('/', function(req, res){
  // INDEX
  res.render('users/index', {users: user.users});
});

userRouter.get('/new', function(req, res){
  // NEW
  res.render('users/new', {});
});

userRouter.post('/', function(req, res){
  // CREATE
  var newUser = {};
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.id = user.newID();
  user.users.push(newUser);
  res.redirect('/users');
});

userRouter.get('/:id', function(req, res){
  // SHOW
  res.render('users/show', {user: user.find(req.params.id)});
});

userRouter.get('/:id/edit', function(req, res){
  // EDIT
  res.render('users/edit', {user: user.find(req.params.id)});
});

userRouter.post('/:id', function(req, res){
  // UPDATE
  var requestedUser = user.find(req.params.id);
  requestedUser.name = req.body.name;
  requestedUser.email = req.body.email;
  res.redirect('/users/' + req.params.id);
});

userRouter.post('/:id/delete', function(req, res){
  // DELETE
  var requestedUser = user.find(req.params.id);
  var index = user.users.indexOf(requestedUser);
  user.users.splice(index, 1);
  res.redirect('/users');
});

module.exports = userRouter;
