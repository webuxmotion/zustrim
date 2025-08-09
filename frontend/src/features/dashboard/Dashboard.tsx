import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import SideBar from './SideBar/SideBar';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '@/shared/utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { connectSocket, disconnectSocket } from '@/socket/socket';
import { useLazyCheckAuthQuery } from '@/api/authApi';
import Room from '../room/Room';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

function DashboardPage() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const room = useSelector((state: RootState) => state.room);
  const [checkAuth, { data, isLoading, isError, isSuccess }] = useLazyCheckAuthQuery();

  useEffect(() => {
    if (!user) {
      logout();
      disconnectSocket();
    } else {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    if (!isLoading && isError && !isSuccess) {
      navigate('/sign-in');
    }
  }, [isError, isSuccess, isLoading, navigate]);

  useEffect(() => {
    if (isSuccess && user) {
      connectSocket(user);
    }
  }, [isSuccess, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Wrapper>
      <SideBar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
      {room?.isUserInRoom && <Room />}
    </Wrapper>
  }

  return null;
}

export default DashboardPage;