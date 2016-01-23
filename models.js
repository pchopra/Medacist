/**
* Create new collection if not present.
*/
Messages = new Mongo.Collection('messages');
Rooms = new Mongo.Collection('rooms');

Meteor.users.after.insert(function (userId, doc) {
    console.log(doc);
    if (doc.profile.role === "administrator") {
        Roles.addUsersToRoles(doc._id, "administrator")
    } else if (doc.profile.role === "patient") {
        Roles.addUsersToRoles(doc._id, "patient")
    } else if (doc.profile.role === "assistant") {
    	Roles.addUsersToRoles(doc._id, "assistant") 
    } else if (doc.profile.role === "physician") {
    	Roles.addUsersToRoles(doc._id, "physician") 
    } 
})

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("messages", function (role) {
    switch(role) {
        case 'assistant':
            return Messages.find();
        case 'patient':
            return Messages.find({roomId: this.userId()});
        default:
            return false;
    }

  });
}
