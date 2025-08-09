import { store } from '@/app/store';
import { setOpenRoom } from '@/features/room/roomSlice';

export const createNewRoom = () => {
    store.dispatch(setOpenRoom({ isUserRoomCreator: true, isUserInRoom: true }));
}

export default {
    createNewRoom
}