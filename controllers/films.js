var Films = require('../client/src/models/films.js');

var films = new Films();
var express = require('express');
var filmRouter = new express.Router();

//INDEX
filmRouter.get('/', function(req,res){
  res.json(films);
});
//SHOW

filmRouter.get('/:id', function(req,res){
  res.json({data: films[req.params.id]})
  });


//UPDATE
filmRouter.put('/:id',function(req,res){
  films[req.params.id] = req.body.film;
  res.json(films);
  });

//CREATE
filmRouter.post('/', function(req,res){
  films.push(req.body.film);
  console.log(req.body);
  res.json(films);
  })

//DELETE
filmRouter.delete('/:id', function(req,res){
  films.splice(req.params.id,1);
  res.json(films);
})



module.exports = filmRouter;