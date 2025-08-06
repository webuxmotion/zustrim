const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const authMiddleware = require('../middleware/auth');
const { friendInvitationControllers } = require('../controllers/friendInvitation/friendInvitationControllers');

const postFriendInvitationSchema = Joi.object({
    email: Joi.string().email().required(),
});

router.post('/invite', authMiddleware, validator.body(postFriendInvitationSchema), friendInvitationControllers.postInviteFriend);

module.exports = router;