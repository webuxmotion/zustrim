import React, { useEffect } from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';
import { useSendFriendInvitationMutation } from '@/api/friendsApi';
import toast from 'react-hot-toast';

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: "80%",
    height: '30px',
    background: "#3ba55d"
}

function AddFriendButton() {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [sendInvitation, { isLoading, isError, isSuccess, error, data }] = useSendFriendInvitationMutation();

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleSendInvitation = async (email) => {
        try {
            await sendInvitation({ email }).unwrap();
        } catch (err) {
            toast.error(err?.data?.message);
            console.error('Error sending invitation:', err);
        } finally {
            handleCloseDialog();
        }
    };

    useEffect(() => {
        if (data) {
            toast.success(data?.message);
        }
    }, [data]);

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