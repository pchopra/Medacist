Meteor.publish("messages", function() {
  if ( Roles.userIsInRole( this.userId, 'assistant') ) {
    return Messages.find();
  } else if ( Roles.userIsInRole( this.userId, 'patient') ) {
    var roomsForCurrentUser = Rooms.find({ userIds: this.userId }).fetch().map(function(room) { 
        return room._id;
    });  // Gets an array of all Room IDs for the user.
    //console.log(roomsForCurrentUser);
    return Messages.find({ roomId: { $in: roomsForCurrentUser } });
    //return Messages.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish("organizations", function() {
  return Organizations.find();
});

Meteor.publish("rooms", function() {
  return Rooms.find({userIds: this.userId});
});