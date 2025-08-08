import React from 'react'
import styled from '@emotion/styled';
import FriendsListItem from './FriendsListItem';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

function FriendsList() {
    const friends = useSelector((state) => state.friends);

    return (
        <MainContainer>
            {friends?.friends.map((friend) => (
                <FriendsListItem
                    key={friend.id}
                    id={friend.id}
                    username={friend.username}
                    isOnline={friend.isOnline}
                />
            ))}
        </MainContainer>
    )
}

export default FriendsList;