import React from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: "80%",
    height: '30px',
    background: "#3ba55d"
}

function AddFriendButton() {
    const handleOpenAddFriendDialog = () => {
        // Logic to open the Add Friend dialog
        console.log("Open Add Friend Dialog");
    };

    return (
        <>
            <CustomPrimaryButton
                style={additionalStyles}
                label="Add Friend"
                onClick={handleOpenAddFriendDialog}
            />
        </>
    )
}

export default AddFriendButton