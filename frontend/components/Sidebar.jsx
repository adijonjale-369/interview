import React from 'react';
import Link from 'next/link';
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
        <Link href="/" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon><DashboardIcon/></ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </Link>
        <Link href="/reports" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon><BarChartIcon/></ListItemIcon>
            <ListItemText primary="Reports"/>
          </ListItem>
        </Link>
        <Link href="/users" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon><PeopleIcon/></ListItemIcon>
            <ListItemText primary="Users"/>
          </ListItem>
        </Link>
        <Link href="/settings" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
