import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';

const MainContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
width: calc(100% - (224px + 72px)); // Adjust width based on sidebar and messenger
display: flex;
align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;

function AppBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token'); // remove JWT token
        navigate('/sign-in'); // redirect to sign-in or home
    };

    return (
        <MainContainer>
            app bar
            <Button variant="contained" color="secondary" onClick={handleLogout}>
                Logout
            </Button>
        </MainContainer>
    )
}

export default AppBar