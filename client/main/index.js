import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if (Meteor.isClient) {

	Template.tweetAppRequest.events({
		'click .find-a-tweet': function(){
			Meteor.call("tweetNow", function(error, response) {
		  	if (error) {
		  		// Session.set('status', {error: err});
		  	} else {
		  		// Session.set('status', response);
		  		console.log(response)
					return response
				}
			});
		}
	});
}





