const express = require('express');
const { authControllers } = require('../controllers/auth/authControllers');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const authMiddleware = require('../middleware/auth');


const registerSchema = Joi.object({
    username: Joi.string().min(2).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required()
});

router.post('/register', validator.body(registerSchema), authControllers.postRegister);
router.post('/login', validator.body(loginSchema), authControllers.postLogin);

// test route to test auth middleware
router.get('/check', authMiddleware, (req, res) => {
    res.status(200).json({ message: "You are authenticated!", user: req.user });
});

module.exports = router;