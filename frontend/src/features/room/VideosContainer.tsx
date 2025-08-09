import { RootState } from '@/app/store';
import styled from '@emotion/styled';
import React from 'react'
import { useSelector } from 'react-redux';
import Video from './Video';

const MainContainer = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

function VideosContainer() {
  const room = useSelector((state: RootState) => state.room);

  return (
    <MainContainer>
      {room.localStream && <Video stream={room.localStream} isLocalStream={true} />}
    </MainContainer>
  )
}

export default VideosContainer