import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import DropdownMenu from './DropdownMenu';

const MainContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  width: calc(100% - (224px + 72px)); // Adjust width based on sidebar and messenger
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

function AppBar() {
    

    return (
        <MainContainer>
            app bar
            <DropdownMenu />
        </MainContainer>
    )
}

export default AppBar