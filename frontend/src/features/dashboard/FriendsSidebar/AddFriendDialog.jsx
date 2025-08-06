import CustomPrimaryButton from '@/shared/components/CustomPrimaryButton';
import InputWithLabel from '@/shared/components/InputWithLabel';
import { validateMail } from '@/shared/utils/validators';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect } from 'react'

function AddFriendDialog({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => { },
}) {
  const [mail, setMail] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleSendInvitation = () => {
    sendFriendInvitation(mail);
  }

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  }

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the email address of the person you want to invite:
          </DialogContentText>
          <InputWithLabel
            label="Email Address"
            type="text"
            value={mail}
            setValue={setMail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Enter email"
            error={!isFormValid}
            helperText={!isFormValid ? 'Invalid email address' : ''}
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            label="Send"
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddFriendDialog