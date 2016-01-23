Template.register.events({
  'submit form': function(event){

      event.preventDefault();
      var name = $('[name=name]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      var group = $('[name=group]').val();

      Accounts.createUser({
          //username: name,
            email: email,
            password: password,
            profile: {
              name: name,
              group: group   
            }
          },  
          function(err) {
            if(err) {
              console.log(err);
              console.log( $('input[name=type-user1]:checked').val() );

            } else {

              //var type = $('input[name="type"]:checked').val();
              console.log( $('input[name=type-user1]:checked').val() );
              Roles.addUsersToRoles(Meteor.userId(), [ $('input[name=type-user1]:checked').val() ]);
              var bool = Roles.userIsInRole( Meteor.userId(), 'Administrator'); // true
              console.log("Original: " + Roles.getRolesForUser(Meteor.userId()) );
              console.log("Result: " + bool);
              console.log("UserId: " + Meteor.userId());
              Router.go('userRoom', { roomId: Meteor.userId() });
            }
          });

      
  }
});