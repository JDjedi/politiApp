import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if (Meteor.isClient) {

	Template.tweetAppRequestPresident.helpers({
		account: function() {
			return Session.get('account');
		}
	});

	Template.tweetAppRequestPresident.events({
		'click #find-a-tweet': function(){
			Meteor.call("tweetNow", function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('account', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});


}




