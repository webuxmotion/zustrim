import { Close, MeetingRoom } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

function CloseRoomButton() {

    const handleLeaveRoom = () => {
        
    };

    return (
        <IconButton onClick={handleLeaveRoom}>
            <Close />
        </IconButton>
    );
}

export default CloseRoomButton;