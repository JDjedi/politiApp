import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if (Meteor.isClient) {

	Template.tweetAppRequestPresident.helpers({
		president: function() {
			return Session.get('president');
		}
	});

	Template.tweetAppRequestPresident.events({
		'click #find-a-tweet-president': function(){
			Meteor.call("tweetNow", 'realDonaldTrump', function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('president', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});

	Template.tweetAppRequestSCOTUS.helpers({
		supCourt: function() {
			return Session.get('supCourt');
		}
	});

	Template.tweetAppRequestSCOTUS.events({
		'click #find-a-tweet-sc': function(){
			Meteor.call("tweetNow", 'USSupremeCourt', function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('supCourt', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});

}




