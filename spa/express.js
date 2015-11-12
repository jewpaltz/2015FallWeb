var express = require('express'),
    app = express();
var person = require("./Model/person");

var data = [{id: 0, Name: "Moshe"}, {id: 1, Name: "Barak"}, {id: 2, Name: "Jonathan"}];

app.use(express.static(__dirname + '/public'));

app.get("/person", function(req, res){
  
  person.get(null, function(rows){
    res.send(rows);
  })
    
})
.get("/person/:id", function(req, res){
  
  person.get(req.params.id, function(rows){
    res.send(rows[0]);
  })
  
});



app.listen(process.env.PORT);