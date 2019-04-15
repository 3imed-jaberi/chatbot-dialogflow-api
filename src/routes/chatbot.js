const express = require('express');
const router = express.Router();

/*
  * 
  * import the controller .. 
  * 
*/

const chatbotController = require('../controllers/chatbot');

/*
  * 
  *  @route  GET /
  *  @desc   Test API route 
  *  @access Public
  * 
*/

router.get('/',chatbotController.home);

/*
  * 
  *  @route   POST /
  *  @desc    Take the question and return the answer
  *  @access  Public
  * 
*/

router.post('/client',chatbotController.chatbot);
          
module.exports = router ;
