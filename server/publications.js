Meteor.publish("messages", function() {
  if ( Roles.userIsInRole( this.userId, 'assistant') ) {
    return Messages.find();
  } else if ( Roles.userIsInRole( this.userId, 'patient') ) {
    return Messages.find();
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