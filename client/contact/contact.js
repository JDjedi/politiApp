import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './contact.html';

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'Sse8REMzb6VNZvcfGT0Z3T5F2',
  consumer_secret:      'iS4rxN1QlFTEy8FZlQj13dj6x8M6ASDYYLLCDiYUgxPz0gX8tQ',
  access_token:         '510936252-iKweDgvqdSmNZMOEmVwcdXlzQlVkZNl7ShQzefE5',
  access_token_secret:  'zLDjI7NcXUs6UyTWucMZVczyDV4PP2sZzzbvok9a0QNW8',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

if (Meteor.isClient) {

	Template.twitAppResponse.events({
		'click .twit-get-tweet': function(){
			T.get('search/tweets', { q: 'banana since:2018-04-10', count: 10 }, function(err, data, response) {
			  console.log(data)
			  console.log(response)
			})
		}
	});
}







