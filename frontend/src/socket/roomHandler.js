import { store } from '@/app/store';
import { setActiveRooms, setOpenRoom, setRoomDetails } from '@/features/room/roomSlice';
import * as socket from './socket';
import webRTCHandler from './webRTCHandler';

export const createNewRoom = () => {
    stopStreamTracks();

    const successCallbackFunc = () => {
        store.dispatch(setOpenRoom({ isUserRoomCreator: true, isUserInRoom: true }));
        socket.createNewRoom();
    }

    const audioOnly = store.getState().room.audioOnly;

    webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
}

export const newRoomCreated = (data) => {
    const { roomDetails } = data;

    store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRooms = (data) => {
    const { activeRooms } = data;
    const friends = store.getState().friends.friends;

    const rooms = [];

    activeRooms.forEach((room) => {
        friends.forEach((friend) => {
            if (friend.id === room.roomCreator.userId) {
                rooms.push({ ...room, creatorUsername: friend.username })
            }
        })
    });

    store.dispatch(setActiveRooms(rooms));
}

export const joinRoom = (roomId) => {
    const successCallbackFunc = () => {
        store.dispatch(setRoomDetails({ roomId }));
        store.dispatch(setOpenRoom({ isUserRoomCreator: false, isUserInRoom: true }));
        socket.joinRoom({ roomId });
    }

    const audioOnly = store.getState().room.audioOnly;

    webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
}

export const leaveRoom = () => {
    const room = store.getState().room;
    const roomId = room.roomDetails.roomId;

    stopStreamTracks();

    socket.leaveRoom({ roomId });
    store.dispatch(setRoomDetails(null));
    store.dispatch(setOpenRoom({ isUserRoomCreator: false, isUserInRoom: false }));
}

function stopStreamTracks() {
    const localStream = store.getState().room.localStream;

    if (localStream) {
        localStream.getTracks().forEach(track => {
            track.stop();
        });
    }
}


export default {
    createNewRoom,
    newRoomCreated,
    updateActiveRooms,
    joinRoom,
    leaveRoom,
}