import React from 'react'
import styled from '@emotion/styled';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
    {
        _id: '1',
        senderId: {
            username: 'Mark',
            mail: 'dummy@ad.com',
        }
    },
    {
        _id: '2',
        senderId: {
            username: 'John',
            mail: 'dummy2@ad.com',
        }
    },
    {
        _id: '3',
        senderId: {
            username: 'Alice',
            mail: 'dummy3@ad.com',
        }
    }
];

const MainContainer = styled.div`
    width: 100%;
    height: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

function PendingInvitationsList() {
    return (
        <MainContainer>
            {DUMMY_INVITATIONS.map(invitation => (
                <PendingInvitationsListItem
                    key={invitation._id}
                    id={invitation._id}
                    username={invitation.senderId.username}
                    email={invitation.senderId.mail}
                />
            ))}
        </MainContainer>
    )
}

export default PendingInvitationsList