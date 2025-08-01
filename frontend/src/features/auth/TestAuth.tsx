import React from 'react'
import { useLazyTestAuthQuery } from '../api/apiSlice';
import { Button } from '@mui/material';

function TestAuth() {
    const [trigger, { data, isFetching, error }] = useLazyTestAuthQuery();

    const handleClick = () => {
        trigger(); // this sends the GET request
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>Test Auth</Button>

            {error && <p style={{ color: 'red' }}>Error: {(error as any).status}</p>}
            {data && <p>Response: {JSON.stringify(data, null, 2)}</p>}
        </div>
    )
}

export default TestAuth