import { ScreenShare, StopScreenShare } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

function ScreenShareButton() {
    const [isSharing, setIsSharing] = useState(false);

    const handleToggleScreenShare = () => {
        setIsSharing((prev) => !prev);
    };

    return (
        <IconButton onClick={handleToggleScreenShare}>
            {isSharing ? <StopScreenShare /> : <ScreenShare />}
        </IconButton>
    );
}

export default ScreenShareButton;