import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
    width: 100%;
    height: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

function PendingInvitationsList() {
    const friends = useSelector((state) => state.friends);
    const [invitation, setInvitations] = useState([]);

    useEffect(() => {
        if (friends?.pendingFriendsInvitations) {
            setInvitations(friends.pendingFriendsInvitations);
        }
    }, [friends]);

    return (
        <MainContainer>
            {invitation.map(invitation => (
                <PendingInvitationsListItem
                    key={invitation._id}
                    id={invitation._id}
                    username={invitation.senderId.username}
                    email={invitation.senderId.email}
                />
            ))}
        </MainContainer>
    )
}

export default PendingInvitationsList