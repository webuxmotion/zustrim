const postAcceptFriend = require('./postAcceptFriend');
const postInviteFriend = require('./postInviteFriend');
const postRejectFriend = require('./postRejectFriend');

exports.friendInvitationControllers = {
    postInviteFriend,
    postAcceptFriend,
    postRejectFriend,
}