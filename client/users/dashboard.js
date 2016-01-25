Template.dashboard.helpers({ 
    userRooms: function() {
      return Rooms.find({userIds: Meteor.userId()});
    }
});