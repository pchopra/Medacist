Meteor.subscribe("rooms");

Template.room.rendered = function(){
    $("body, html").animate({ 
        scrollTop: $(document).height()
    }, 200);
}

Template.assistantPanel.events = {
	'click .clinicianRequest': function() {
		//var clinicians = Meteor.users.find({"profile.role": 'clinician'});
		console.log(clinicians);
	},
	'click .hospitalRefer': function() {
	}
}