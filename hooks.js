Meteor.users.after.insert(function (userId, doc) {
    console.log(doc);
    if (doc.profile.userType === "administrator") {
        Roles.addUsersToRoles(doc._id, "administrator");
    } else if (doc.profile.userType === "patient") {
        Roles.addUsersToRoles(doc._id, "patient");
    } else if (doc.profile.userType === "assistant") {
    	Roles.addUsersToRoles(doc._id, "assistant"); 
    } else if (doc.profile.userType === "clinician") {
    	Roles.addUsersToRoles(doc._id, "clinician");
    } 
});

if (Meteor.isClient) {
  Messages.after.insert( function() {
      $("body, html").animate({ 
          scrollTop: $(document).height()
      }, 200);
      $('#message').val('');
      $("#message").focus();
  });
}