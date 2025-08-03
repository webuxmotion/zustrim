import styled from '@emotion/styled';
import React from 'react'

const MainContainer = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.grey[600]};
  padding: 20px;
  padding-top: calc(48px + 10px); // Adjust for AppBar height
`;

function Messenger() {
    return (
        <MainContainer>
            <div>Messenger</div>
        </MainContainer>
    )
}

export default Messenger