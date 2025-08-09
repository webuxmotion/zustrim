import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RoomState = Record<string, any>;

const initialState: RoomState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomState(state, action: PayloadAction<Partial<RoomState>>) {
      Object.assign(state, action.payload);
    },
    clearRoomState() {
      return initialState;
    },
    setOpenRoom(state, action: PayloadAction<{ isUserRoomCreator: boolean, isUserInRoom: boolean }>) {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },
    setRoomDetails(state, action: PayloadAction<any>) {
      state.roomDetails = action.payload;
    },
    setActiveRooms(state, action: PayloadAction<any[]>) {
      state.activeRooms = action.payload;
    },
    setLocalStream(state, action: PayloadAction<any | null>) {
      state.localStream = action.payload;
    },
    setRemoteStreams(state, action: PayloadAction<any[]>) {
      state.remoteStreams = action.payload;
    },
    setAudioOnly(state, action: PayloadAction<boolean>) {
      state.audioOnly = action.payload;
    },
    setScreenSharingStream(state, action: PayloadAction<any | null>) {
      state.screenSharingStream = action.payload;
      state.isScreenSharingActive = !!action.payload;
    },
  },
});

export const {
  setRoomState,
  clearRoomState,
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setAudioOnly,
  setScreenSharingStream,
} = roomSlice.actions;

export default roomSlice.reducer;