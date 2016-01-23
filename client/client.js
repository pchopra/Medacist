// Routes
Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', {
  name: 'home',
  template: 'home'
});
Router.route('/register');
Router.route('/login');
Router.route('/room');

/**
* Templates
*/
if (Meteor.isClient) {
    Template.messages.helpers({
        messages: function() {
            return Messages.find({}, { sort: { time: -1}});
        }
    });

    Template.test.events({
      'click .newRoom': function() {
        console.log( $('.username').val() );
      }
    });

    Template.input.events = {
      'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
          if (Meteor.user())
            var name = 'logged in'; //Meteor.user().profile.name;
          else
            var name = 'Anonymous';
          var message = document.getElementById('message');
          if (message.value != '') {
            Messages.insert({
              name: name,
              message: message.value,
              time: Date.now(),
            });

            document.getElementById('message').value = '';
            message.value = '';
          }
        }
      }
    }

    
    Template.register.events({
        'submit form': function(event){
            event.preventDefault();
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();

            Accounts.createUser({
                email: email,
                password: password
            });

            Router.go('/room');
        }
    });
  
    Template.main.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout(function() {
              // Redirect to login
              Router.go('/login');
            });
        }
    });
    
    


}