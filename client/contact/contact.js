import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './contact.html';


if (Meteor.isClient) {

	Template.twitAppResponse.events({
		'click .twit-get-tweet': function(){
			Meteor.call("tweetNow");
		}
	});
}

//I think all this shit or at least the GET method need to go on the server file









