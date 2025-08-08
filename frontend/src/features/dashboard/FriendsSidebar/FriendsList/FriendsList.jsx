import React from 'react';
import styled from '@emotion/styled';
import FriendsListItem from './FriendsListItem';
import { useSelector } from 'react-redux';
import { LoaderIcon } from 'react-hot-toast';

const MainContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

function FriendsList() {
    const friendsState = useSelector((state) => state.friends);

    if (!friendsState) {
        return (
            <MainContainer>
                <LoaderIcon />
            </MainContainer>
        );
    }

    const friendsToShow = friendsState.friends.map((friend) => ({
        ...friend,
        isOnline: friendsState.onlineUsers.some(
            (user) => user.userId === friend.id
        ),
    }));

    return (
        <MainContainer>
            {friendsToShow.map((friend) => (
                <FriendsListItem
                    key={friend.id}
                    id={friend.id}
                    username={friend.username}
                    isOnline={friend.isOnline}
                />
            ))}
        </MainContainer>
    );
}

export default FriendsList;