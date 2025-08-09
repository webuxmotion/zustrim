import { Mic, MicOff } from '@mui/icons-material'
import { IconButton } from '@mui/material';
import React, { useState } from 'react'

function MicButton() {
    const [micEnabled, setMicEnabled] = useState(true);

    const handleToggleMic = () => {
        setMicEnabled(state => !state);
    }

  return (
    <IconButton onClick={handleToggleMic}>
        {micEnabled ? <Mic /> : <MicOff />}
    </IconButton>
  )
}

export default MicButton