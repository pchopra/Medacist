Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', {
  name: 'home',
  template: 'home'
});

// Auth
Router.route('/register');
Router.route('/login');

//Other
Router.route('/analytics');
Router.route('/room');

Router.map(function() {

    this.route('/room/:userId', {
        name: "userRoom",
        template: "room",
        //waitOn: function() {
        //  return Meteor.subscribe("allUserData");
        //},
        //data: function() {
            //user = Accounts.
            //return Messages.find({name: this.params._username}, { sort: { time: -1}});
            //return Messages.findOne({_id: this.params._id});
        //}
    });
});
