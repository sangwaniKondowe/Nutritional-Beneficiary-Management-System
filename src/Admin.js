import {React, useState} from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExtensionIcon from '@material-ui/icons/Extension';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Divider } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { BlockOutlined, BookmarkBorder } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    paddingRight: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [open, setOpen] = useState(Boolean);


  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="open-drawer"
            onClick={() => setOpen(true)}
            >
              <MenuIcon />
          </IconButton>
          <Drawer
          variant="permanent"
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {}}
          >
              <div >
                <Box textAlign="center" p={2.6}>
                  Components
                </Box>
                <Divider />
                <List className={classes.list}>
                  <ListItem button onClick={() => {}}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="dec-dash"
                    >
                    <DashboardIcon />
                    </IconButton>
                    <ListItemText  primary={"Dashboard"} />
                  </ListItem>
                  <ListItem button onClick={() => {}}>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="dec-dash"
                    >
                    <PermIdentityIcon />
                    </IconButton>
                    <ListItemText primary={"Beneficiaries"} />
                  </ListItem>
                  <ListItem button onClick={() => {}}>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="dec-dash"
                    >
                    <ExtensionIcon/>
                    </IconButton>
                    <ListItemText primary={"Programs"} />
                  </ListItem>
                  <ListItem button onClick={() => {}}>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="dec-dash"
                    >
                    <PeopleIcon/>
                    </IconButton>
                    <ListItemText primary={"Users"} />
                  </ListItem>
                  <ListItem button onClick={() => {}}>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="dec-dash"
                    >
                    <SettingsIcon/>
                    </IconButton>
                    <ListItemText primary={"Settings"} />
                  </ListItem>
                </List>
              </div>
          </Drawer>
          <Typography variant="h6" color="inherit" className={classes.root}>
            NBMIS
          </Typography>
        <div>
            
            <IconButton
                edge="end"
                color="inherit"
                aria-label="dec-dash"
                >
                  <NotificationsNoneOutlinedIcon/>
            </IconButton>

            <IconButton
                edge="end"
                color="inherit"
                aria-label="dec-dash"
                >
                  <AccountCircle/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

 

    </div>

  );
}



