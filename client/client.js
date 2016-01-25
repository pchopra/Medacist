Template.main.helpers({ 
    userRooms: function() {
      //console.log(Rooms.find({userIds: Meteor.userId()}));
      return Rooms.find({userIds: Meteor.userId()});
    },
   name: function() {
    return Meteor.user().profile.name;
   },
   userType: function() {
    return Meteor.user().profile.userType;
   },
   userId: function() {
    return Meteor.userId();
   }
})