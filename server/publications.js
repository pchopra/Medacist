//Meteor.publish("messages", function() {
//  return Messages.find();
//});

Meteor.publish("messages", function() {
  if ( Roles.userIsInRole( this.userId, 'assistant') ) {
    //console.log("assist");
    return Messages.find();
  } else if ( Roles.userIsInRole( this.userId, 'patient') ) {
    //console.log("patient");
    return Messages.find({roomId: this.userId });
  } else {
    //console.log("none");
    this.stop();
    return
  }
});
/*

Meteor.publish("rooms", function() {
  if ( Roles.userIsInRole( this.userId, 'specialist') ) {
    return Rooms.find( );
  } else if ( Roles.userIsInRole( this.userId, 'patient') ) {
    return Rooms.find({roomId: this.userId });
  } else {
    this.stop();
    return
  }
});
*/ 