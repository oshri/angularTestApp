var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());


var contacts = [{name:"Oshri"},{name:"Eugene"},{name:"Pavel"}];

app.get('/contacts',function(req,res){
	res.status(200).json(contacts);
});

app.listen(9001);