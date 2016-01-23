Template.messages.helpers({
    messages: function() {
        return Messages.find({roomId: Router.current().params.userId}, { sort: { time: -1}});
    }
});

Template.input.events = {
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
            
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
                    roomId: userId,
                    name: name,
                    text: message,
                    hour: date.getHours(),
                    minute: date.getMinutes()
                });
                //$('#message') = '';
                //$('#message').value = '';
            }
        }
    }
}