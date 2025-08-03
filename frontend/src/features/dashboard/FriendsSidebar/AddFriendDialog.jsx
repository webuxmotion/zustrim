import React from 'react'

function AddFriendDialog({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {},
}) {
    const [mail, setMail] = React.useState('');
    const [isFormValid, setIsFormValid] = React.useState(false);

    const handleSendInvitation = () => {

    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    }

  return (
    <div>AddFriendDialog</div>
  )
}

export default AddFriendDialog