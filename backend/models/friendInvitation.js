const mongoose = require('mongoose');

const friendInvitationSchema = new mongoose.Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

const FriendInvitation = mongoose.model('FriendInvitation', friendInvitationSchema);

module.exports = FriendInvitation;
