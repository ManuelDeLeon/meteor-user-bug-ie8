if (Meteor.isClient) {
	Template.home.loggedIn = function(){ return Meteor.userId();  };
}