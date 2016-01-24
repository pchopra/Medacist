Template.main.helpers({        
   name: function() {
    return Meteor.user().profile.name;
   },
   role: function() {
    return Meteor.user().profile.role;
   },
   userId: function() {
    return Meteor.userId();
   }
})