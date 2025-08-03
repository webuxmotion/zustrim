import { Button } from '@mui/material'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups'

function MainPageButton() {
  return (
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
      }}>
      <GroupsIcon />
    </Button>
  )
}

export default MainPageButton