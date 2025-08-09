import { styled } from '@mui/material/styles';
import React from 'react'
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import ActiveRoomButton from './ActiveRoomButton';

const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[600], // dark background
  color: theme.palette.grey[200],           // light text
  boxShadow: theme.shadows[1],
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  width: '72px',
  height: '100%',
}));

function SideBar() {
  const room = useSelector((state: RootState) => state.room);

  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {room.activeRooms.map((activeRoom) => (
        <ActiveRoomButton
          roomId={activeRoom.roomId}
          creatorUsername={activeRoom.creatorUsername}
          amountOfParticipants={activeRoom.participants.length}
          key={activeRoom.roomId}
          isUserInRoom={room.isUserInRoom}
        />
      ))}
    </MainContainer>
  )
}

export default SideBar