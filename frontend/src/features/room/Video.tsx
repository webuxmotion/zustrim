import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react'

const MainContainer = styled.div`
    height: 50%;
    width: 50%;
    background-color: black;
    border-radius: 8px;
`;

const VideoEl = styled.video`
    width: 100%;
    height: 100%;
`;

interface VideoProps {
    stream: MediaStream;
    isLocalStream?: boolean;
}

function Video({ stream, isLocalStream = false }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                video.play();
            }
        }
    }, [stream]);
    
    return (
        <MainContainer>
            <VideoEl
                ref={videoRef}
                autoPlay
                muted={isLocalStream}
            />
        </MainContainer>
    )
}

export default Video