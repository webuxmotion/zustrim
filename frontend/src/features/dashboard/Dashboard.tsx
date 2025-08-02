import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { useLazyCheckAuthQuery } from '../api/apiSlice';
import styled from '@emotion/styled';
import SideBar from './SideBar/SideBar';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

function DashboardPage() {
  const navigate = useNavigate();
  const [checkAuth, { data, isLoading, isError, isSuccess }] = useLazyCheckAuthQuery();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading && isError && !isSuccess) {
      navigate('/');
    }
  }, [isError, isSuccess, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Wrapper>
      <SideBar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  }

  return null;
}

export default DashboardPage;