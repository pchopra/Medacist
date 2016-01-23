Template.login.events({  
    'submit #login': function(event, template) {        
        var email = $('[name=email]').val(),
            password = $('[name=password]').val();

        Meteor.loginWithPassword(email, password, function(error) {            
            if (Meteor.user()) {
                if(Meteor.user().profile.role != 'administrator') {
                    Router.go('userRoom', { roomId: Meteor.userId() });
                } else {
                    Router.go('home');
                }
            } else {
                var message = "Erro: <strong>" + error.reason + "</strong>";
                $('#form-messages').html(message);
            }

            return;
        });
        return false;
    }
});