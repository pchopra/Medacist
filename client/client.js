if (Meteor.isClient) {
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
  
    Template.main.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
            Router.go('home');
        }
    });
    

}