import { store } from '@/app/store';
import { setActiveRooms, setOpenRoom, setRoomDetails } from '@/features/room/roomSlice';
import * as socket from './socket';

export const createNewRoom = () => {
    store.dispatch(setOpenRoom({ isUserRoomCreator: true, isUserInRoom: true }));

    socket.createNewRoom();
}

export const newRoomCreated = (data) => {
    const { roomDetails } = data;

    store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRooms = (data) => {
    const { activeRooms } = data;

    store.dispatch(setActiveRooms(activeRooms));
}


export default {
    createNewRoom,
    newRoomCreated,
    updateActiveRooms
}