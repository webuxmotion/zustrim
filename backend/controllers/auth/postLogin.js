const User = require('../../models/user'); // Assuming you have a User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            user: {
                _id: user._id,
                email: user.email,
                username: user.username,
                token
            }
        });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = postLogin;
