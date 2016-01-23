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

Router.map(function() {

    this.route('/room/:username', {
        name: "userRoom",
        template: "room",
        //waitOn: function() {
        //  return Meteor.subscribe("allUserData");
        //},
        //data: function() {
        //  return Meteor.userId();
        //}
    });
});

Router.route('/analytics');
