import styled from '@emotion/styled'
import { CloseFullscreen, OpenInFull } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'

const MainContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

function ResizeRoomButton({ isRoomMinimized, handleRoomResize }) {
  return (
    <MainContainer>
        <IconButton style={{ color: 'white' }} onClick={handleRoomResize}>
            {isRoomMinimized ? <OpenInFull /> : <CloseFullscreen />}
        </IconButton>
    </MainContainer>
  )
}

export default ResizeRoomButton