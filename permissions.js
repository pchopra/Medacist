Accounts.config({
    forbidClientAccountCreation: true
});

Meteor.methods({
  addUser: function(user) {    
    //var pattern = { email: String, password: String };
    //check(user, pattern);
    Accounts.createUser(user);
  },
  
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
        text: message,
        createdAt: new Date( Date.now() )
      },  
      function(err) {
        if(err) {
          //alert("Error in posting");
          console.log(err);
        }
      }
    );
  },
  
  addRoom: function (user, org) {
    //console.log("User: "+user);
    //console.log("Org: "+org);
    Rooms.insert({
      userIds: [user],
      orgId: org,
      createdAt: new Date( Date.now() )
      },  
      function(err) {
        if(err) {
          //alert("Error in posting");
          console.log("Error new room: "+err);
        }
      }
    );
  }
});