import styled from '@emotion/styled';
import React from 'react'

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.grey[700]};
  color: ${({ theme }) => theme.palette.grey[300]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  display: flex;
  width: 224px;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

function FriendsSidebar() {
    return (
        <MainContainer>FriendsSidebar</MainContainer>
    )
}

export default FriendsSidebar