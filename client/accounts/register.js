Meteor.subscribe("organizations");

Template.register.helpers({
    all_orgs: function() {      
      return Organizations.find({}, {sort: {name: -1}});
    },
    one_org: function(id) {
      return Organizations.findOne(id);
    }
});

Template.register.events({
  'change [name="role"]': function(event){
    if ($('[name="role"]').val() != 'patient' && $('[name="role"]').val() != 'administrator') {
      $('[name="org"]').hide();
    } else {
      $('[name="org"]').show();
    }
    
  },
  
  'submit form': function(event){

      event.preventDefault();
    
      var user = {
        email: $('[name=email]').val(),
        password: $('[name=password]').val(),
        profile: {
          name: $('[name=name]').val(),
          organization: $('[name=org]').val(),
          userType:  $('[name=utype]').val()          
        }
      };
    
      console.log(user);
      
      Meteor.call('addUser', user, function(error) {
        if (error) {
          alert(error.reason);
        } else {
          Meteor.loginWithPassword(user.email, user.password, function(error) {
            Meteor.subscribe("messages");
            if(error) {
              console.log(error);
            } else if(user.profile.userType == 'patient') {
              Meteor.call("addRoom", Meteor.userId(), user.profile.organization);
              Router.go('dashboard');
            } else {
              Router.go('dashboard');
            }
          });
        }
      });
    
      /*
      var name = $('[name=name]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      var org = $('[name=org]').val();
      var utype = $('[name=utype]').val();
      
      var nu = Accounts.createUser({
            email: email,
            password: password,
            createdAt: new Date( Date.now() ),
            profile: {
              name: name,
              organizations: [org],
              userType: utype
            }
          },  
          function(err) {
            Meteor.subscribe("messages");
            if(err) {
              console.log(err);
            } else if(utype == 'patient') {
              //var newRoom = Meteor.call("addRoom", Meteor.userId(), org);
              //console.log(newRoom);
              //Router.go('userRoom', { roomId: newRoom });
            } else {
              Router.go('home');
            }
          }
      );
      */

  }
});