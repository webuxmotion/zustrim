const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const { updateFriendsPendingInvitations, updateFriends } = require("../../socketHandlers/update/friends");

const postAcceptFriend = async (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req.user;

        const invitation = await FriendInvitation.findById(id);

        if (!invitation) {
            return res.status(401).send({
                message: 'Something went wrong! Please try again',
            });
        }

        const { senderId, receiverId } = invitation;

        const senderUser = await User.findById(senderId);
        senderUser.friends = [...senderUser.friends, receiverId];

        const receiverUser = await User.findById(receiverId);
        receiverUser.friends = [...receiverUser.friends, senderId];

        await senderUser.save();
        await receiverUser.save();

        await invitation.deleteOne();

        await updateFriendsPendingInvitations(receiverId.toString());

        await updateFriends(senderId.toString());
        await updateFriends(receiverId.toString());

        return res.status(200).send({
            message: 'Invitation accepted',
        });

    } catch (error) {
        return res.status(500).send({
            message: 'Something went wrong! Please try again',
        });
    }
}

module.exports = postAcceptFriend;