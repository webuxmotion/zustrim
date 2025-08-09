import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import roomHandler from '@/socket/roomHandler';

function CreateRoomButton() {
    const createNewRoomHandler = () => {
        roomHandler.createNewRoom();
    }

    return (
        <Button
            onClick={createNewRoomHandler}
            style={{
                width: '48px',
                height: '48px',
                minWidth: 0,
                borderRadius: '16px',
                padding: 0,
                margin: 0,
                marginTop: '10px',
                color: 'white',
                backgroundColor: "#5865F2",
            }}
        >
            <AddIcon />
        </Button>
    )
}

export default CreateRoomButton