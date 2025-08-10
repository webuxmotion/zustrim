import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { MoreVert } from '@mui/icons-material';
import { disconnectSocket } from '@/socket/socket';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioOnly } from '@/features/room/roomSlice';

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const room = useSelector(state => state.room);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    disconnectSocket();
    localStorage.removeItem('token'); // remove JWT token
    navigate('/sign-in'); // redirect to sign-in or home
  };

  const handleAudioOnlyChange = () => {
    dispatch(setAudioOnly(!room.audioOnly));
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleAudioOnlyChange}>{room?.audioOnly ? 'Audio Only Enabled' : 'Audio Only Disabled'}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
