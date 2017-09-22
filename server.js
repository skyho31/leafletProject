var express = require('express');
var app = express();

app.set('view engine', 'jade');


app.get('/', function(req, res){
    res.render('leaflet', {title: 'hi'})
});

app.listen(3000, () => {
    console.log('server running at 3000');
});
