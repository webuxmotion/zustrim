import Avatar from '@/shared/components/Avatar';
import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react'
import InvitationDecisionButtons from './InvitationDecisionButtons';

function PendingInvitationsListItem({ id, username, email, onAccept, onReject }) {
    const [buttonsDisabled, setButtonsDisabled] = React.useState(false);

    const handleAccept = () => {
        setButtonsDisabled(true);
        onAccept({ id });
    };

    const handleReject = () => {
        setButtonsDisabled(true);
        onReject({ id });
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