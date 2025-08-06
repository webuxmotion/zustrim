import React from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';
import { useSendFriendInvitationMutation } from '@/api/friendsApi';

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: "80%",
    height: '30px',
    background: "#3ba55d"
}

function AddFriendButton() {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [sendInvitation, { isLoading, isError, isSuccess, error }] = useSendFriendInvitationMutation();

    const handleOpenAddFriendDialog = () => {
        // Logic to open the Add Friend dialog
        console.log("Open Add Friend Dialog");
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleSendInvitation = async (email) => {
        try {
            await sendInvitation({ email }).unwrap();
            handleCloseDialog();
        } catch (err) {
            console.error('Error sending invitation:', err);
        }
    };

    return (
        <>
            <CustomPrimaryButton
                style={additionalStyles}
                label="Add Friend"
                onClick={handleOpenAddFriendDialog}
            />
            <AddFriendDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseDialog}
                sendFriendInvitation={handleSendInvitation}
            />
        </>
    )
}

export default AddFriendButton