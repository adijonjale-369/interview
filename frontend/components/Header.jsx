import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Analytics Dashboard</Typography>
        <IconButton><Badge badgeContent={3} color="primary"><NotificationsIcon/></Badge></IconButton>
        <Avatar sx={{ ml:2 }}>A</Avatar>
      </Toolbar>
    </AppBar>
  );
}
