import { Videocam, VideocamOff } from '@mui/icons-material'
import { IconButton } from '@mui/material';
import React, { useState } from 'react'

function CameraButton() {
    const [cameraEnabled, setCameraEnabled] = useState(true);

    const handleToggleCamera = () => {
        setCameraEnabled(state => !state);
    }

  return (
    <IconButton onClick={handleToggleCamera}>
        {cameraEnabled ? <Videocam /> : <VideocamOff />}
    </IconButton>
  )
}

export default CameraButton