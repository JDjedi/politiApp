
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

			var T = new Twit({
			  consumer_key:         'Sse8REMzb6VNZvcfGT0Z3T5F2',
			  consumer_secret:      'iS4rxN1QlFTEy8FZlQj13dj6x8M6ASDYYLLCDiYUgxPz0gX8tQ',
			  access_token:         '510936252-iKweDgvqdSmNZMOEmVwcdXlzQlVkZNl7ShQzefE5',
			  access_token_secret:  'zLDjI7NcXUs6UyTWucMZVczyDV4PP2sZzzbvok9a0QNW8',
			  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
			});

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


















