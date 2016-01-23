Meteor.publish("messages", function() {
  if ( Roles.userIsInRole( this.userId, 'assistant') ) {
    return Messages.find();
  } else if ( Roles.userIsInRole( this.userId, 'patient') ) {
    return Messages.find({roomId: this.userId });
  } else {
    this.stop();
    return
  }
});