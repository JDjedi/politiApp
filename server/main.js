
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	Future = Npm.require('fibers/future');

	WebApp.connectHandlers.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    return next();
  })


	Meteor.methods({
		tweetNow: function(publicFigure){
			this.unblock();
			var Twit = require('twit');
			var future = new Future();



			T.get('users/lookup', { screen_name: publicFigure, tweet_mode: 'extended' }, function(err, data, response) {
				if (err) {
					// console.log("Something went wrong!");
					// console.log(err);
					return err;
				} else {
					// console.log("Voila It worked!");
					// console.log(data);
					future["return"](data)
				}				
			});
			return future.wait();
		}
	});
});


















