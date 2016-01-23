if (Meteor.isClient) {

    Template.messages.helpers({
        messages: function() {
            return Messages.find({}, { sort: { time: -1}});
        }
    });

    Template.input.events = {
        'keydown input#message' : function (event) {
            if (event.which == 13) { // 13 is the enter key event

                //Temporarily taking the name of the new user 
                var name = Session.get('username');

                var date = new Date( Date.now() ); 

                /*
                if (Meteor.user())
                var name = Meteor.user().profile.name;
                else
                var name = 'Anonymous';
                */

                var message = document.getElementById('message');
                if (message.value != '') {
                    Messages.insert({
                      name: name,
                      text: message.value,
                      hour: date.getHours(),
                      minute: date.getMinutes()
                    });

                    document.getElementById('message').value = '';
                    message.value = '';
                }
            }
        }
    }

    Template.newPatient.events({
      'click .newRoom': function() {
        console.log( $('.username').val() );
        Session.set('username', $('.username').val() ); 

        Rooms.insert({
          hospitalID: 'default',
          name: $('.username').val(), 
        });

        Router.go('/room');
      }
    });
    
    Template.main.helpers({        
       name: function() {
        return Meteor.user().profile.name;
       },
       userId: function() {
        return Meteor.userId();
       }
    });
    

}