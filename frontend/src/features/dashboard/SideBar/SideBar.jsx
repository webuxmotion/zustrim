import styled from '@emotion/styled';
import React from 'react'

const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[600], // dark background
  color: theme.palette.grey[200],           // light text
  boxShadow: theme.shadows[1],
  display: 'flex',
  width: '72px',
  height: '100%',
}));

function SideBar() {
    return (
        <MainContainer>SideBar</MainContainer>
    )
}

export default SideBar