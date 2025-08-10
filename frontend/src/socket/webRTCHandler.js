import { store } from "@/app/store";
import { setLocalStream, setRemoteStreams } from "@/features/room/roomSlice";
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
        remoteStream.connUserSocketId = connUserSocketId;
        addNewRemoteStream(remoteStream);
    });
}

const handleSignalingData = (data) => {
    const { connUserSocketId, signal } = data;

    if (peers[connUserSocketId]) {
        peers[connUserSocketId].signal(signal);
    }
}

function addNewRemoteStream(remoteStream) {
    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = [...remoteStreams, remoteStream];

    store.dispatch(setRemoteStreams(newRemoteStreams));
}

const closeAllConnections = () => {
    Object.entries(peers).forEach(mappedObject => {
        const connUserSocketId = mappedObject[0];

        if (peers[connUserSocketId]) {
            peers[connUserSocketId].destroy();
            delete peers[connUserSocketId];
        }
    });
}

const handleParticipantLeftRoom = (data) => {
    const { connUserSocketId } = data;

    if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();
        delete peers[connUserSocketId];
    }

    const remoteStreams = store.getState().room.remoteStreams;

    const newRemoteStreams = remoteStreams.filter(remoteStream => remoteStream.connUserSocketId !== connUserSocketId);

    store.dispatch(setRemoteStreams(newRemoteStreams));
}

const webRTCHandler = {
    getLocalStreamPreview,
    prepareNewPeerConnection,
    handleSignalingData,
    closeAllConnections,
    handleParticipantLeftRoom,
}

export default webRTCHandler;