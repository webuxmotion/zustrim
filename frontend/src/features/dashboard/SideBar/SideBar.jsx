import styled from '@emotion/styled';
import React from 'react'
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';

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
    return (
        <MainContainer>
          <MainPageButton />
          <CreateRoomButton />
        </MainContainer>
    )
}

export default SideBar