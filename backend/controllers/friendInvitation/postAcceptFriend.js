const postAcceptFriend = (req, res) => {
    return res.status(201).send({
        message: 'Friend accepted!',
    });
}

module.exports = postAcceptFriend;