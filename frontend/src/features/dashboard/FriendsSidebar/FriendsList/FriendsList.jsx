import React from 'react'
import styled from '@emotion/styled';
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
    {
        id: 1,
        username: 'Mark',
        isOnline: true,
    },
    {
        id: 2,
        username: 'John',
        isOnline: false,
    },
    {
        id: 3,
        username: 'Jane',
        isOnline: true,
    },
];

const MainContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

function FriendsList() {

    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((friend) => (
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