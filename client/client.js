Template.main.helpers({        
   name: function() {
    return Meteor.user().profile.name;
   },
   userId: function() {
    return Meteor.userId();
   }
})