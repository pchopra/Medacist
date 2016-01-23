if (Meteor.isClient) {

    /*
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
    */
    
    Template.main.helpers({        
       name: function() {
        return Meteor.user().profile.name;
       },
       userId: function() {
        return Meteor.userId();
       }
    });
    

}