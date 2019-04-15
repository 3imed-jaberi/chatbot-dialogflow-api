# CHATBOT-DIALOGFLOW-API
---
## What technologies that i used ?
 - NodeJs - as server side application representing APIs.
 - Express - used as a framework on node to enable creating routes and APIs in an easy way.
 - Api ai - as Dialogflow SDK , plugin allows integrating agents from the dialogflow natural language processing service with Node.js application.
 - Helmet - helpers for more secure in Express application.
 - Uuid - universally unique identifier - for dialogflow client sessions.
 
## What is the pattern and the archeticture that i used ?
 - REST API is a software architectural style that defines a set of constraints to be used for creating Web services
 - The MVC Design Pattern is one of the oldest architectural pattern for web applications.

## Setup prerequists
 - you have to install NodeJS as it's the service and also to use its package manager npm.

## How to run the application
 - clone or download this project.
 - open CMD or Terminal in this folder.
 - write this command ```npm install``` or just ```npm i``` to install dependencies.
 - then add your data in the '.env' file .
 - now write ```npm run start``` in the terminal to run the api and can test with postman or integrate with any front-end framework/library/template engine.
## The Test Guide 
 Here we have two routes ;
  - ```/``` : it's a ```GET``` request , just for say hello to the users .. 
  - ```/client``` : it's a ```POST``` request , sould be put the client message in ```msg variable``` or change the name of variable in ```src/controllers/chatbot.js - ligne 51 ``` then received the chatbot answer after few milliseconds ..  
## What's next ?
 - convert this project to node package ( cli pakcage can generate this code ) ..
 - create frontend projects for this api ..

