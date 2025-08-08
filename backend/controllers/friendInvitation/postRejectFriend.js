const postRejectFriend = (req, res) => {
    return res.status(201).send({
        message: 'Friend rejected!',
    });
}

module.exports = postRejectFriend;