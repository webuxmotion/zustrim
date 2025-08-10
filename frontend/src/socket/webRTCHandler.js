import { store } from "@/app/store";
import { setLocalStream } from "@/features/room/roomSlice";
import * as socket from './socket';
import Peer from 'simple-peer';

const getConfiguration = () => {
    const turnIceServers = null;

    if (turnIceServers) {
        // TODO: use TURN server credentials
    } else {
        console.warn('Using only STUN server');

        return {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302'
                }
            ]
        }
    }
}

const audioOnlyConstraints = {
    audio: true,
    video: false,
}

const defaultConstraints = {
    audio: true,
    video: true,
}

export const getLocalStreamPreview = (audioOnly = false, callbackFunction) => {
    const constraints = audioOnly ? audioOnlyConstraints : defaultConstraints;

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream));
        callbackFunction();
    }).catch(error => {
        console.log('Cannot get an access to local stream', error);
    });
}

let peers = {};

export const prepareNewPeerConnection = ({ connUserSocketId, initiator }) => {
    const localStream = store.getState().room.localStream;

    if (initiator) {
        console.log('preparing new peer connection as initiator');
    } else {
        console.log('preparing new peer connection as NOT initiator');
    }

    peers[connUserSocketId] = new Peer({
        initiator,
        config: getConfiguration(),
        stream: localStream
    });

    peers[connUserSocketId].on('signal', (data) => {
        const signalData = {
            signal: data,
            connUserSocketId,
        };

        socket.signalPeerData(signalData);
    });

    peers[connUserSocketId].on('stream', (remoteStream) => {
        console.log('remote stream came', remoteStream);
    });
}

const handleSignalingData = (data) => {
    const { connUserSocketId, signal } = data;

    if (peers[connUserSocketId]) {
        peers[connUserSocketId].signal(signal);
    }
}

const webRTCHandler = {
    getLocalStreamPreview,
    prepareNewPeerConnection,
    handleSignalingData,
}

export default webRTCHandler;