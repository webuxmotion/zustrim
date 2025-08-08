const User = require('../../models/user');
const FriendInvitation = require('../../models/friendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async (userId) => {
    try {
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId,
        }).populate('senderId', '_id username email');

        // find all active connections of specific userId
        const receiverList = serverStore.getActiveConnections(userId);
        const io = serverStore.getSocketServerInstance();

        receiverList.forEach(receiverSocketId => {
            io.to(receiverSocketId).emit('friends-invitations', {
                pendingInvitations: pendingInvitations ? pendingInvitations : []
            });
        });

    } catch (error) {
        console.error('Error updating friends pending invitations:', error);
    }
}

module.exports = {
    updateFriendsPendingInvitations
}