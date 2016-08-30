var express = require('express');
var app = express();


var port = 5022;

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static('public'));

/*app.get('/', function(req, res) {
  res.send('');
});*/


app.listen(port, function(){
    console.log('Example app listening on port ' + port + '!');
});