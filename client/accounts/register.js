Template.register.events({
  'submit form': function(event){

      event.preventDefault();
      var name = $('[name=name]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      var group = $('[name=group]').val();
      var userType = $("[name=role]").val();

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
            } else if(userType != 'administrator') {
              Router.go('userRoom', { roomId: Meteor.userId() });
            } else {
              Router.go('home');
            }
          });

  }
});