import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if (Meteor.isClient) {

	Template.tweetAppRequest.events({
		'click .find-a-tweet': function(){
			Meteor.call("tweetNow", function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set("status", response);
		  		console.log(response);
		  		return response;
				}
			});
		}
	});


	// Template.tweetAppRequest.onCreated(function() {
	// 	Meteor.call("tweetNow", function(error, response) {
	//   	if (error) {
	//   		alert('Error');
	//   	} else {
	//   		Session.set("status", response);
	//   		console.log(status)
	//   		console.log(response)
	// 		}
	// 	});
	// })
}





