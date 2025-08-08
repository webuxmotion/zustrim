const FriendInvitation = require('../../models/friendInvitation');
const User = require('../../models/user');

const postInviteFriend = async (req, res) => {
    const { email: targetEmail } = req.body;

    const { userId, email } = req.user;

    // check if friend that we would like to invite is not user
    if (email.toLowerCase() === targetEmail.toLowerCase()) {
        return res.status(409).send({
            message: 'Sorry. You cannot become friend with yourself!'
        });
    }

    const targetUser = await User.findOne({
        email: targetEmail.toLowerCase()
    });

    if (!targetUser) {
        return res.status(404).send({
            message: `Friend with email: ${targetEmail} has not been found.`
        });
    }

    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser._id
    });

    if (invitationAlreadyReceived) {
        return res.status(409).send({
            message: 'Invitation has been already sent'
        });
    }

    const usersAlreadyFriends = targetUser.friends.find(friendId => friendId.toString() === userId.toString());

    if (usersAlreadyFriends) {
        return res.status(409).send({
            message: 'Friend already added. Please check friends list'
        });
    }

    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id
    });

    return res.status(201).send({
        message: 'Invitation has been sent',
        targetUser: {
            email: targetUser?.email
        },
    });
}

module.exports = postInviteFriend;