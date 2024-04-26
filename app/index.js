const express = require('express'),
app = express();

const server = require('http').createServer(app);

/* configuração de server */
	app.listen(3000, function(){
		console.log('Server Started On Port 3000');
	});

  //Qualquer request ele retornará OK
  app.get('/*', function(req, res){
    res.send('Ok!');
  });
/* Fim configuração de server */