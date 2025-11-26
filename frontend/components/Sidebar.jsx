import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  return (
    <Drawer variant="permanent" open>
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon/></ListItemIcon>
          <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><BarChartIcon/></ListItemIcon>
          <ListItemText primary="Reports"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon/></ListItemIcon>
          <ListItemText primary="Users"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><SettingsIcon/></ListItemIcon>
          <ListItemText primary="Settings"/>
        </ListItem>
      </List>
    </Drawer>
  );
}
