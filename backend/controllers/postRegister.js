const User = require('../models/User');
const bcrypt = require('bcryptjs');

const postRegister = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const userExists = await User.exists({ email });

        if (userExists) {
            return res.status(409).json({ message: "User already exists" });
        }

        // encrypt the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // save the user to the database
        await newUser.save();

        // generate a JWT token (this is a placeholder, implement your JWT logic)
        const token = "JWT TOKEN";

        res.status(201).json({ message: "User registered successfully", user: { username, email, token } });
    } catch (error) {
        console.error("Error in postRegister:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = postRegister;
