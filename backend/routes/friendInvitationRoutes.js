const express = require('express');
const { authControllers } = require('../controllers/authControllers');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const authMiddleware = require('../middleware/auth');

const postFriendInvitationSchema = Joi.object({
    targetEmailAddress: Joi.string().email().required(),
});

router.post('/invite', authMiddleware, validator.body(postFriendInvitationSchema), authControllers.postFriendInvitation);