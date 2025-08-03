import React from 'react'
import styled from '@emotion/styled';

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
            <div>Pending Invitations List</div>
        </MainContainer>
    )
}

export default PendingInvitationsList