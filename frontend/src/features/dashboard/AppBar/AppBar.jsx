import styled from '@emotion/styled';
import React from 'react'
import DropdownMenu from './DropdownMenu';
import { useSelector } from 'react-redux';

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
    const user = useSelector((state) => state.user);

    return (
        <MainContainer>
            {`${user.username} ${user._id}`}
            <DropdownMenu />
        </MainContainer>
    )
}

export default AppBar