import styled from '@emotion/styled';
import React from 'react'
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';
import FriendsList from './FriendsList/FriendsList';

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.grey[700]};
  color: ${({ theme }) => theme.palette.grey[300]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  display: flex;
  width: 224px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

function FriendsSidebar() {
    return (
        <MainContainer>
          <AddFriendButton />
          <FriendsTitle title="Private Messages" />
          <FriendsList />
          <FriendsTitle title="Invitations" />
          <PendingInvitationsList />
        </MainContainer>
    )
}

export default FriendsSidebar