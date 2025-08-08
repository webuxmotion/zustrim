const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const authMiddleware = require('../middleware/auth');
const { friendInvitationControllers } = require('../controllers/friendInvitation/friendInvitationControllers');

const postFriendInvitationSchema = Joi.object({
    email: Joi.string().email().required(),
});

const postDecisionSchema = Joi.object({
    id: Joi.string().required(),
});

router.post('/invite', authMiddleware, validator.body(postFriendInvitationSchema), friendInvitationControllers.postInviteFriend);
router.post('/accept', authMiddleware, validator.body(postDecisionSchema), friendInvitationControllers.postAcceptFriend);
router.post('/reject', authMiddleware, validator.body(postDecisionSchema), friendInvitationControllers.postRejectFriend);

module.exports = router;