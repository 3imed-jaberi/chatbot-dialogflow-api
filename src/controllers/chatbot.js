/*
  * 
  * required for user the dotenv variables .. 
  * 
*/
require('dotenv').config();



const apiai = require('apiai');
const uuid = require('uuid/v4');



/*
  * 
  * create the dialogflow api with client key access .. 
  * 
*/

const chatbot = apiai(process.env.CLIENT_KEY_ACCESS);


const chatbotController = {};

/*
  * 
  * home controller .. 
  * 
*/

chatbotController.home = (req,res,next)=>{
   res.status(200).json({'msg':'welcome to the IMED JABERI API for dialogflow chatbot using api ai sdk ..' });
};

/*
  * 
  * chatbot controller .. 
  * 
*/

chatbotController.chatbot = (req,res,next)=>{

  /*
    * 
    * put the text request with msg and unique session id with UUID(v4) package ..
    * then send it to the dialogflow bot ..  
    * 
  */

  const request = chatbot.textRequest( req.body.msg , { sessionId: uuid() });

  /*
    * 
    * return the response .. 
    * 
  */


  // if the response is success .. 
  request.on('response', function(response) {
  
       res.status(200).json({ "clientRequestMsg" : response.result.resolvedQuery , "chatbotResponseMsg" : response.result.fulfillment.speech });
  });
  // if the response is failed .. 
  request.on('error', function(error) {
          res.status(404).json(error);
  });

  /*
    * 
    * finish the request .. 
    * 
  */
  request.end();
}

module.exports = chatbotController; 