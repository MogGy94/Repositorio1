// node index.js

const morgan = require ('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express ();

const routes = require('./routes/routes.js');


// settings
app.set('json spaces',4);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());//escucha datos json
app.use(bodyParser.urlencoded({extended: false}));
// routes
app.use('/routes',routes);
// static files

//start server
app.listen(3000,() => {
  console.log('server on port',3000);
});
