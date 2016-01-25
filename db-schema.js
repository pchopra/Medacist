Messages = new Mongo.Collection('messages', {
  transform: function(doc) {
    doc.userObj = Meteor.users.findOne(doc.userId);
    return doc;
  }
});
Rooms = new Mongo.Collection('rooms', {
  transform: function(doc) {
    doc.orgObj = Organizations.findOne(doc.orgId);
    
    return doc;
  }
});
Organizations = new Mongo.Collection('organizations');

var Schemas = {};

Schemas.Room = new SimpleSchema({
    orgId: {
        type: String,
        label: "Organization"
    },
    userIds: {
        type: Array,
        label: "Room Users"
    },
    "userIds.$": {
        type: String
    },
    createdAt: {
        type: Date,
        label: "Created at",
        autoValue: function () {
          if (this.isInsert) {
            return new Date();
          }
        }      
    }
});

Schemas.Message = new SimpleSchema({
    text: {
        type: String,
        label: "Text"
    },
    userId: {
        type: String,
        label: "User Object"
    },
    roomId: {
        type: String,
        label: "Room ID"
    },
    createdAt: {
        type: Date,
        label: "Created at",
        autoValue: function () {
          if (this.isInsert) {
            return new Date();
          }
        }      
    }
});

Schemas.Organization = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    createdAt: {
        type: Date,
        label: "Created at",
        autoValue: function () {
          if (this.isInsert) {
            return new Date();
          }
        }      
    }
});

Schemas.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schemas.UserProfile = new SimpleSchema({
    name: {
        type: String
    },
    userType: {
        type: String
    },
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    organizations : {
        type: Array,
        optional: true
    },
    "organizations.$": {
        type: Object,
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: Schemas.UserCountry,
        optional: true
    }
});

Schemas.User = new SimpleSchema({
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        //optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    roles: {
        type: [String],
        optional: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});

Meteor.users.attachSchema(Schemas.User);
Organizations.attachSchema(Schemas.Organization);
Messages.attachSchema(Schemas.Message);
Rooms.attachSchema(Schemas.Room);