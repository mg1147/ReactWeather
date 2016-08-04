var express = require('express');

 // Create your app
var app = express();
const PORT = process.env.PORT || 3000;

 app.use(express.static('public'));

app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto'] === 'http'){
      next();
    } else {
      res.redirect('http://' + req.hostname + req.url);
    }
});

 app.listen(PORT, function () {
   console.log ('Server läuft auf Port ' + PORT);
 });
