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
    eqCurrentUser: function(id) {
        //console.log("Sent user: "+id);
        //console.log("Logged user: "+Meteor.userId());
        return (Meteor.userId() == id);
    }
});

Template.input.events = {
    'click #submitBtn': function(){ 
            Meteor.call("addMessage", Router.current().params.roomId, $('#message').val());
            $('#message').val('');
    },
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
          
            Meteor.call("addMessage", Router.current().params.roomId, $('#message').val());
            $('#message').val('');
        }
    }
}