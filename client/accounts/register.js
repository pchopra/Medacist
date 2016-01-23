Template.register.events({
  'submit form': function(event){

      event.preventDefault();
      var name = $('[name=name]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      var group = $('[name=group]').val();
      var userType = $('input[name=type-user1]:checked').val();

      Accounts.createUser({
          //username: name,
            email: email,
            password: password,
            profile: {
              name: name,
              group: group,
              role: userType  
            }
          });

        

      /*
      Accounts.createUser({
          //username: name,
            email: email,
            password: password,
            profile: {
              name: name,
              group: group,
              role: userType  
            }
          },  
          function(err) {
            if(err) {
              console.log(err);
              //console.log( $('input[name=type-user1]:checked').val() );

            } else {

              //var type = $('input[name="type"]:checked').val();
              console.log( $('input[name=type-user1]:checked').val() );
              Roles.addUsersToRoles(Meteor.userId(), [Meteor.user().profile.role] );
              //Roles.addUsersToRoles(Meteor.userId(), [ $('input[name=type-user1]:checked').val() ]);
              var bool = Roles.userIsInRole( Meteor.userId(), 'administrator'); // true
              console.log("Original: " + Roles.getRolesForUser(Meteor.userId()) );
              console.log("Result: " + bool);
              Router.go('/room');
            }
          });

        */
  }
});