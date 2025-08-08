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

const updateFriends = async (userId) => {
    try {
        const receiverList = serverStore.getActiveConnections(userId);
        const io = serverStore.getSocketServerInstance();

        if (receiverList.length > 0) {
            const user = await User.findById(userId, { _id: 1, friends: 1 })
                .populate('friends', '_id username email');

            if (user) {
                const friendsList = user.friends.map((friend) => {
                    return {
                        id: friend._id,
                        email: friend.email,
                        username: friend.username
                    }
                });

                receiverList.forEach(receiverSocketId => {
                    io.to(receiverSocketId).emit('friends-list', {
                        friends: friendsList ? friendsList : []
                    });
                });
            }
        }
    } catch (error) {
        console.error('Error updating friends:', error);
    }
}

module.exports = {
    updateFriendsPendingInvitations,
    updateFriends,
}