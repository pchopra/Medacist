Messages = new Mongo.Collection('messages');
Rooms = new Mongo.Collection('rooms');

Meteor.users.after.insert(function (userId, doc) {
    console.log(doc);
    if (doc.profile.role === "administrator") {
        Roles.addUsersToRoles(doc._id, "administrator");
    } else if (doc.profile.role === "patient") {
        Roles.addUsersToRoles(doc._id, "patient");
    } else if (doc.profile.role === "assistant") {
    	Roles.addUsersToRoles(doc._id, "assistant"); 
    } else if (doc.profile.role === "physician") {
    	Roles.addUsersToRoles(doc._id, "physician");
    } 
})