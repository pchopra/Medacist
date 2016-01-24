Meteor.subscribe("messages");

Template.messages.helpers({
    all_messages: function() {
        return Messages.find({roomId: Router.current().params.roomId}, { sort: { time: -1}});
    },
    userId: function() {
        return Meteor.userId();
    }
});

Template.message.helpers({
    time_ago: function(t) {
        return moment(t).fromNow();
    },
    eqCurrentUser: function(user) {
        console.log("Sent user: "+user);
        console.log("Logged user: "+Meteor.userId());
        return (Meteor.userId() == user);
    }
});

Template.input.events = {
/*
    'click .submitBtn': function(){ 
        console.log("something happened at least lol");
        
        var userId = Meteor.userId();
        var date = new Date( Date.now() ); 
            
        if (Meteor.user()) {
            var name = Meteor.user().profile.name;
        } else {
            var name = 'Anonymous'; //should we allow?
        }
            
        var message = $('#message').val();
            
        if (message != '') {
            Messages.insert({
                roomId: Router.current().params.roomId,
                userId: Meteor.userId(),
                name: name,
                text: message,
                created_at: date,
            });
        //$('#message').val('');
    }

    },
*/
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
            
            console.log( Roles.getRolesForUser(Meteor.userId()) );
            var userId = Meteor.userId();
            var date = new Date( Date.now() ); 
            
            if (Meteor.user()) {
                var name = Meteor.user().profile.name;
            } else {
                var name = 'Anonymous'; //should we allow?
            }
            
            var message = $('#message').val();
            
            if (message != '') {
                Messages.insert({
                    roomId: Router.current().params.roomId,
                    userId: Meteor.userId(),
                    name: name,
                    text: message,
                    created_at: date,
                });
                $('#message').val('');
            }
        }
    }
}