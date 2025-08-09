import styled from '@emotion/styled'
import React, { useState } from 'react'
import ResizeRoomButton from './ResizeRoomButton';
import VideosContainer from './VideosContainer';
import RoomButtons from './RoomButtons/RoomButtons';

const MainContainer = styled.div`
    position: absolute;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202225;
`;

const fullScreenRoomStyle = {
    width: '100%',
    height: '100vh',
}

const minimizedRoomStyle = {
    bottom: '0px',
    right: '0px',
    width: '30%',
    height: '40vh',
}

function Room() {
    const [isRoomMinimized, setIsRoomMinimized] = useState(true);

    const roomResizeHandler = () => {
        setIsRoomMinimized(state => !state);
    }

    return (
        <MainContainer
            style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
        >
            <VideosContainer />
            <RoomButtons />
            <ResizeRoomButton
                isRoomMinimized={isRoomMinimized}
                handleRoomResize={roomResizeHandler}
            />
        </MainContainer>
    )
}

export default Room