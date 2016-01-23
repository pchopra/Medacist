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
      });

      Router.go('/room');
  }
});