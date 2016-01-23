Meteor.methods({
  addMessage: function (roomId, message) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    // Make sure the message isn't empty
    else if (message == '') {
      throw new Meteor.Error("empty-text");
    }
 
    Messages.insert({
        roomId: roomId,
        userId: Meteor.userId(),
        name: Meteor.user().profile.name,
        text: message,
        created_at: new Date( Date.now() )
    });
  },
});