/*
  * 
  * required for user the dotenv variables .. 
  * 
*/

require('dotenv').config();



const http = require('http');
const app = require('./src/app');


/*
  * 
  * create the server with native nodejs dependencie .. 
  * 
*/

const server = http.createServer(app);

/*
  * 
  * run the server .. 
  * 
*/

server.listen(process.env.PORT , () => {
  console.log(`server is runnig on port ${process.env.PORT} ...`);      
});