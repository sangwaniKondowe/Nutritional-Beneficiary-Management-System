// import {React, useState} from 'react';
// //import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
 import DashboardIcon from '@material-ui/icons/Dashboard';
 import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
 import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
 import ExtensionIcon from '@material-ui/icons/Extension';
// import ListItemText from '@material-ui/core/ListItemText';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Box, Divider } from '@material-ui/core';
 import PeopleIcon from '@material-ui/icons/People';
 import AccountCircle from '@material-ui/icons/AccountCircle';
import Employee from './Employee';
 //import SettingsIcon from '@material-ui/icons/Settings';
// import { BlockOutlined, BookmarkBorder } from '@material-ui/icons';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     paddingRight: 1,
//   },
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// }));

// export default function Admin() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(Boolean);


//   return (
//     <div className={classes.root}>
      
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton 
//             edge="start" 
//             color="inherit" 
//             aria-label="open-drawer"
//             onClick={() => setOpen(true)}
//             >
//               <MenuIcon />
//           </IconButton>
//           <Drawer
//           variant="permanent"
//           anchor="left"
//           open={open}
//           onClose={() => setOpen(false)}
//           onOpen={() => {}}
//           >
//               <div >
//                 <Box textAlign="center" p={2.6}>
//                   Components
//                 </Box>
//                 <Divider />
//                 <List className={classes.list}>
//                   <ListItem button onClick={() => {}}>
//                     <IconButton
//                       edge="start"
//                       color="inherit"
//                       aria-label="dec-dash"
//                     >
//                     <DashboardIcon />
//                     </IconButton>
//                     <ListItemText  primary={"Dashboard"} />
//                   </ListItem>
//                   <ListItem button onClick={() => {}}>
//                   <IconButton
//                       edge="start"
//                       color="inherit"
//                       aria-label="dec-dash"
//                     >
//                     <PermIdentityIcon />
//                     </IconButton>
//                     <ListItemText primary={"Beneficiaries"} />
//                   </ListItem>
//                   <ListItem button onClick={() => {}}>
//                   <IconButton
//                       edge="start"
//                       color="inherit"
//                       aria-label="dec-dash"
//                     >
//                     <ExtensionIcon/>
//                     </IconButton>
//                     <ListItemText primary={"Programs"} />
//                   </ListItem>
//                   <ListItem button onClick={() => {}}>
//                   <IconButton
//                       edge="start"
//                       color="inherit"
//                       aria-label="dec-dash"
//                     >
//                     <PeopleIcon/>
//                     </IconButton>
//                     <ListItemText primary={"Users"} />
//                   </ListItem>
//                   <ListItem button onClick={() => {}}>
//                   <IconButton
//                       edge="start"
//                       color="inherit"
//                       aria-label="dec-dash"
//                     >
//                     <SettingsIcon/>
//                     </IconButton>
//                     <ListItemText primary={"Settings"} />
//                   </ListItem>
//                 </List>
//               </div>
//           </Drawer>
//           <Typography variant="h6" color="inherit" className={classes.root}>
//             NBMIS
//           </Typography>
//         <div>
            
//             <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="dec-dash"
//                 >
//                   <NotificationsNoneOutlinedIcon/>
//             </IconButton>

//             <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="dec-dash"
//                 >
//                   <AccountCircle/>
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>

 

//     </div>

//   );
// }

import React from 'react';
//import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';
//import Employee from './Dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import clsx from 'clsx';
//import { makeStyles } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
//import Employee from './Employee';
import { Card } from '@material-ui/core';
import Dashboard from './Dashboard';
import Beneficiaries from './Beneficiaries';
import FieldStaff from './FieldStaff';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root1: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 36,
  },
  appBarSpacer: theme.mixins.toolbar,
  content1: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fixedHeight: {
    height: 240,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.root1}>
            NBMS
          </Typography>

          <div className={classes.root}>
            
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
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/' className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'}/>
          </ListItem>
          </Link>

          <Link to='/beneficiaries'  className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary={'Beneficiaries'}/>
          </ListItem>
          </Link>

          <Link to='/programs' className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary={'Programs'}/>
          </ListItem>
          </Link>

          <Link to='/users' className={classes.link}>
          <ListItem button >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={'Users'}/>
          </ListItem>
          </Link>
        
          
        </List>
      </Drawer>
      
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
            <Routes>
              <Route exact path='/' element={<Dashboard />}>
                
              </Route>

              <Route exact path='/beneficiaries'element={<Beneficiaries />}>
                Beneficiaries
              </Route>

              <Route exact path='/programs' >
                Programs
              </Route>

              <Route exact path='/users' element={<FieldStaff />}>
                Users
              </Route>
            </Routes>
 
      </main>
    </div>
    </Router>
  );
}
// import Beneficiaries from './Beneficiaries';

//import PrimarySearchAppBar from './search';
//import { StyledEngineProvider } from '@mui/material/styles'
// import FieldStaff from './FieldStaff'
// import StaffForm from './Users/StaffForm';

// export default function Admin(){

//   return (
    
//       <FieldStaff />
    
//   );
// }