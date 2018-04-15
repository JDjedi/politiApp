





import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	WebApp.connectHandlers.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    return next();
  })

	Meteor.methods({
		tweetNow: function(){

			var Twit = require('twit');

			var T = new Twit({
			  consumer_key:         'Sse8REMzb6VNZvcfGT0Z3T5F2',
			  consumer_secret:      'iS4rxN1QlFTEy8FZlQj13dj6x8M6ASDYYLLCDiYUgxPz0gX8tQ',
			  access_token:         '510936252-iKweDgvqdSmNZMOEmVwcdXlzQlVkZNl7ShQzefE5',
			  access_token_secret:  'zLDjI7NcXUs6UyTWucMZVczyDV4PP2sZzzbvok9a0QNW8',
			  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
			});

			T.get('search/tweets', { q: 'Syria since:2018-04-13', count: 1 }, function(err, data, response) {
				if (err) {
					console.log("Something went wrong!");
				} else {
					console.log("Voila It worked!");
					return data;
				}
			})
		}
	});
});




























