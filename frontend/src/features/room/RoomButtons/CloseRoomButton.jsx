import { leaveRoom } from '@/socket/roomHandler';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

function CloseRoomButton() {

    const handleLeaveRoom = () => {
        leaveRoom();
    };

    return (
        <IconButton onClick={handleLeaveRoom}>
            <Close />
        </IconButton>
    );
}

export default CloseRoomButton;