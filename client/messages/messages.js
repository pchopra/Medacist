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
        return (Meteor.userId() == user);
    }
});

Template.input.events = {
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
            var message = $('#message').val();
            Meteor.call("addMessage", Router.current().params.roomId, message);
            $('#message').val('');
            
        }
    }
}