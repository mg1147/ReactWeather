var express = require('express');

 // Create your app
var app = express();
const PORT = process.env.PORT || 3000;



app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
    }
});


app.use(express.static('public'));

 app.listen(PORT, function () {
   console.log ('Server läuft auf Port ' + PORT);
 });
