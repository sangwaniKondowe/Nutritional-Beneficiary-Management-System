
 import DashboardIcon from '@material-ui/icons/Dashboard';
 import PermIdentityIcon from '@material-ui/icons/PermIdentity';
 import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
 import ExtensionIcon from '@material-ui/icons/Extension';
 import PeopleIcon from '@material-ui/icons/People';
 import AccountCircle from '@material-ui/icons/AccountCircle';
 import React from 'react';
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
import {Box} from '@material-ui/core'

import FieldStuffs from './FieldStuffs'
import Beneficiaries from './Beneficiaries'
import Programs from './Program'
import Dashboard  from './Dashboard';

import {Switch,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom';


import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import { blue, blueGrey,grey,white } from '@material-ui/core/colors';
import SchoolAndHealthProgram from './programsPages/SchoolAndHealthProgram';
import AdolescentNutrition from './programsPages/AdolescentNutrition';
import WaterSanitationAndHygiene from './programsPages/WaterSanitationAndHygiene';
// import IntergratedHomeStead from './programsPages/IntergratedHomeStead'
import IntergratedHomeStead from './programsPages/IntergratedHomeStead';
import InfantAndYoungChild from './programsPages/InfantAndYoungChild'
import dam from './programsPages/dam'
import ProgramBeneficiaries from './ProgramBeneficiaries';

import WaterSanitationAndHygienBeneficiaries from './BeneficiaryPages/WaterSanitationAndHygienBeneficiaries';
import HomeAndSchoolBeneficiaries from './BeneficiaryPages/HomeAndSchoolBeneficiaries';
import AdolescentNutritionBeneficiaries from './BeneficiaryPages/AdolescentNutritionBeneficiaries';

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
    paddingTop: theme.spacing(4),
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
  wrapper:{
    padding:theme.spacing(8,2)
  },
    
  navlinks:{
    color:blueGrey["A400"],
    "& : hover ":{
      color : blue["A400"]
    },
    " & div":{
      color: blue["A400"],
    }
  },
  activeNavlinks:{
    color: grey["A700"],
    "& div" : {
      color: blueGrey["A400"]
    }
  }

}));

// function that is handling the drawer navogation

const MiniDrawer = props => {
  
  
  
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  {/* getting icons and names for the side drawer as a list in an array */}

  const menuListItems = [
    {
      text:"Dashboard",
      icon: <DashboardIcon />,
      link:"/"

    },
    {
      text: "Beneficiaries",
      icon: <PermIdentityIcon />,
      link:"/ProgramBeneficiaries"
    },
    {
      text: "Programs",
      icon: <ExtensionIcon />,
      link:"/programs"
    },
    {
    text: "All Field Staffs",
    icon: <PeopleIcon />,
    link:"/fieldsstaffs"

    }

  ]


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
                
                  {/* <NotificationsNoneOutlinedIcon/> */}
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
      
{/* this tag is for slide drawer wchi takes items from menulist item array list */}
  
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

          {menuListItems.map((item, index) => {
            const {text,icon} = item;

            return (
              <ListItem 
              component = {NavLink}
               to = {item.link} 
               className = {classes.navlinks}
               activeClassName={classes.activeNavlinks}
               key={index}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary = {text} />
              </ListItem>
            )

          })} 
        
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* registration our routes */}


       <Box className = {classes.wrapper}>
 
       

        <Switch>
          <Route exact path = "/" render={() => <Dashboard/>}/>
          <Route exact path = "/ProgramBeneficiaries" render={() => <ProgramBeneficiaries/>}/>

          <Route exact path = "/beneficiaries" render={() => <Beneficiaries/>}/>
          <Route exact path = "/programs" render={() => <Programs/>}/>
          <Route exact path = "/fieldsstaffs" render={() => <FieldStuffs/>}/>
          <Route exact path = "/programs/intervetions" render={()=><SchoolAndHealthProgram/>}/>
          <Route exact path="/programs/adolescentnutrion" render={() => <AdolescentNutrition/>}/>
          <Route exact path="/programs/WaterSanitationAndHygiene" render={() => <WaterSanitationAndHygiene/>}/>
          
          <Route exact path = "/programs/InfantAndYoungChild" render = {() => <InfantAndYoungChild/>}/>
          <Route exact path ="/Beneficiaries/HomeAndSchoolBeneficiaries" render ={() =><HomeAndSchoolBeneficiaries/>}/>
          <Route exact path ="/Beneficiaries/AdolescentNutritionBeneficiaries" render ={() =><AdolescentNutritionBeneficiaries/>}/>
          <Route exact path ="/Beneficiaries/WaterSanitationAndHygienBeneficiaries" render={() =><WaterSanitationAndHygienBeneficiaries/>}/>
          </Switch>

          </Box>
          

        
          
      
          
          

      

      
   
      


        {/* removed stuff here */}

       
 
      </main>
    </div> 
  );
}


export default MiniDrawer