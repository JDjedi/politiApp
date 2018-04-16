import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './legislative.html';

if (Meteor.isClient) {
	Template.tweetAppRequestSenMajLdr.helpers({
		senMajLdr: function() {
			return Session.get('senMajLdr');
		}
	});

	Template.tweetAppRequestSenMinLdr.helpers({
		senMinLdr: function() {
			return Session.get('senMinLdr');
		}
	});

	Template.tweetAppRequestHouseMinLdr.helpers({
		houseMinLdr: function() {
			return Session.get('houseMinLdr');
		}
	});

	Template.tweetAppRequestHouseMajLdr.helpers({
		houseMajLdr: function() {
			return Session.get('houseMajLdr');
		}
	});

	Template.tweetAppRequestSenMinLdr.events({
		'click #find-a-tweet-senMinLdr': function(){
			Meteor.call("tweetNow", 'SenSchumer', function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('senMinLdr', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});

	Template.tweetAppRequestSenMajLdr.events({
		'click #find-a-tweet-senMajLdr': function(){
			Meteor.call("tweetNow", 'SenateMajLdr', function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('senMajLdr', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});

	Template.tweetAppRequestHouseMajLdr.events({
		'click #find-a-tweet-houseMajLdr': function(){
			Meteor.call("tweetNow", 'SpeakerRyan', function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('houseMajLdr', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});

	Template.tweetAppRequestHouseMinLdr.events({
		'click #find-a-tweet-houseMinLdr': function(){
			Meteor.call("tweetNow", 'NancyPelosi', function(error, response) {
		  	if (error) {
		  		alert('Error');
		  	} else {
		  		Session.set('houseMinLdr', response);
		  		// console.log(response[0].name);
		  		return response;
				}
			});
		}
	});
}



