import styled from '@emotion/styled';
import React from 'react'
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import CameraButton from './CameraButton';

const MainContainer = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5865f2;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

function RoomButtons() {
  return (
    <MainContainer>
      <ScreenShareButton />
      <MicButton />
      <CloseRoomButton />
      <CameraButton />
    </MainContainer>
  )
}

export default RoomButtons