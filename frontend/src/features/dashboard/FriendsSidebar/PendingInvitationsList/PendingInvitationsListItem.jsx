import Avatar from '@/shared/components/Avatar';
import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react'
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { useAcceptFriendInvitationMutation, useRejectFriendInvitationMutation } from '@/api/friendsApi';

function PendingInvitationsListItem({ id, username, email }) {
    const [buttonsDisabled, setButtonsDisabled] = React.useState(false);
    const [acceptFrinedInvitation, { data: acceptData }] = useAcceptFriendInvitationMutation();
    const [rejectFrinedInvitation, { data: rejectData }] = useRejectFriendInvitationMutation();
    

    const handleAccept = () => {
        setButtonsDisabled(true);
        acceptFrinedInvitation({ id });
    };

    const handleReject = () => {
        setButtonsDisabled(true);
        rejectFrinedInvitation({ id });
    };

    return (
        <Tooltip title={email}>
            <div style={{ width: "100%" }}>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 15px",
                    cursor: "pointer",
                    justifyContent: "space-between",

                }}>
                    <Avatar username={username} />
                    <Typography
                        sx={{
                            marginLeft: "7px",
                            fontWeight: 700,
                            color: "#8e9297",
                            flexGrow: 1
                        }}
                        variant="subtitle1"
                    >{username}</Typography>
                    <InvitationDecisionButtons
                        disabled={buttonsDisabled}
                        acceptInvitationHandler={handleAccept}
                        rejectInvitationHandler={handleReject}
                    />
                </Box>
            </div>
        </Tooltip>
    )
}

export default PendingInvitationsListItem