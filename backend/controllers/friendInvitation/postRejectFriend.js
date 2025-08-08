const FriendInvitation = require("../../models/friendInvitation");
const { updateFriendsPendingInvitations } = require("../../socketHandlers/update/friends");

const postRejectFriend = async (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req.user;

        const invitationExists = await FriendInvitation.exists({
            _id: id
        });

        if (invitationExists) {
            await FriendInvitation.findByIdAndDelete(id);
        }

        await updateFriendsPendingInvitations(userId);

        return res.status(200).send({
            message: 'Invitation rejected',
        });

    } catch (error) {
        console.log(error);

        return res.status(500).send({
            message: 'Something went wrong! Please try again',
        });
    }
}

module.exports = postRejectFriend;