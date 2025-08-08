import styled from '@emotion/styled';
import React, { useEffect } from 'react'
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';
import FriendsList from './FriendsList/FriendsList';
import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
  background-color: ${({ theme }) => (theme as any).colors?.grey?.[700] ?? '#333'};
  color: ${({ theme }) => (theme as any).colors?.grey?.[300] ?? '#ccc'};
  box-shadow: ${({ theme }) => (theme as any).shadows?.[1] ?? '0px 1px 4px rgba(0,0,0,0.2)'};
  display: flex;
  width: 224px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

function FriendsSidebar() {
    const friends = useSelector((state: RootState) => state.friends);

    useEffect(() => {
      if (friends.pendingFriendsInvitations) {
        console.log(friends.pendingFriendsInvitations);
      }
    }, [friends]);

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