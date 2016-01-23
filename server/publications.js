//publish messages
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