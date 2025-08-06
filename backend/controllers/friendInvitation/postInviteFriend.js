const User = require('../../models/user');

const postInviteFriend = async (req, res) => {
    const { email: targetEmail } = req.body;

    const { userId, email } = req.user;

    console.log(targetEmail, email);

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

    return res.send("Controller is working!")
}

module.exports = postInviteFriend;