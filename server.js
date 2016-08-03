var express = require('express');

 // Create your app
 var app = express();

 app.use(express.static('public'));

 app.listen(3000, function () {
   console.log ('Server läuft auf Port 3000');
 });
