import { store } from "@/app/store";
import { setLocalStream } from "@/features/room/roomSlice";

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