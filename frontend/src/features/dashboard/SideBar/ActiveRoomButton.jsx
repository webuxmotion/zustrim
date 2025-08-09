import Avatar from '@/shared/components/Avatar';
import { joinRoom } from '@/socket/roomHandler';
import { Button, Tooltip } from '@mui/material';
import React from 'react'

function ActiveRoomButton({
    creatorUsername,
    roomId,
    amountOfParticipants,
    isUserInRoom,
}) {
    const handleJoinActiveRoom = () => {
        if (amountOfParticipants < 4) {
            joinRoom(roomId);
        }
    }

    const activeRoomButtonDisabled = amountOfParticipants > 3;
    const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;

    return (
        <Tooltip title={roomTitle}>
            <div>
                <Button
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
                    disabled={activeRoomButtonDisabled || isUserInRoom}
                    onClick={handleJoinActiveRoom}
                >
                    <Avatar username={creatorUsername} />
                </Button>
            </div>
        </Tooltip>
    )
}

export default ActiveRoomButton