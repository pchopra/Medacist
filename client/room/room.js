Template.room.rendered = function(){
    $("body, html").animate({ 
        scrollTop: $(document).height()
      
    }, 200);
}

Template.assistantPanel.events = {
	'click .specalistRequest': function() {
		var specalists = Meteor.users.find({"profile.role": 'physician'});
		console.log(specalists);
	},
	'click .hospitalRefer': function() {
	}
}