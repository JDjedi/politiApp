import { Meteor } from 'meteor/meteor';


var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

// attach connect-style middleware for response header injection
Meteor.startup(function () {
  connectHandler.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    return next();
  })
})