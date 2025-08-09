import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function useLogRedux() {
    const state = useSelector((state) => state);

    useEffect(() => {
        console.log('Full Redux state:', state);
    }, [state]);
}