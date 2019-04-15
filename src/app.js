const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');


const app = express();

/*
  * 
  * routes
  * 
*/

const chatbot = require('./routes/chatbot');

/*
  * 
  * middlewares 
  * 
*/

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',chatbot);

module.exports = app ;



