
import React from 'react'
import DashboardCard from './DashboardCard'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
})



function Dashboard() {
  const classes = useStyles();

  
  return (

    // grid layers on dashboard with different content
     <Grid container spacing = {4} className={classes.gridContainer}> 
       <Grid  item xs={12} sm ={6} md={4}>
       <DashboardCard/>

       </Grid>

       <Grid item xs={12} sm ={6} md={4} >
       <DashboardCard/>

       </Grid>

       <Grid  item xs={12} sm ={6} md={4}>
       <DashboardCard/>

       </Grid>

       <Grid  item xs={12} sm ={6} md={4}>
       <DashboardCard/>

       </Grid>

       <Grid item xs={12} sm ={6} md={4} >
       <DashboardCard/>

       </Grid>

       <Grid item xs={12} sm ={6} md={4}>
       <DashboardCard/>

       </Grid>
       

     </Grid>
    
  )
}

export default Dashboard






// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import { IconButton } from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { CardActionArea, CardMedia } from '@material-ui/core';
// import { CardHeader, Paper } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
// import clsx from 'clsx';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 50,
//     marginTop: 10,
//     minHeight: 275,
//   },
  // root1: {
  //   minWidth: 10,
  //   minHeight:150,
  // },
//   title1: {
//     fontSize: 20,
//   },
//   title: {
//     fontSize: 20,
//     marginTop: 60,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
//   fixedHeight: {
//     height: 240,
//   },
  //  avatar: {
  //   backgroundColor: red[500],
  // },
//   content: {
//     flexGrow: 1,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   }
// });

// export default function OutlinedCard() {
//   const classes = useStyles();
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


//   return (
// <div>
    // <Typography className={classes.title} gutterBottom variant='h5' component="h2">
    //       Statistics
    //     </Typography>
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
        
//       </CardContent>
//     </Card>
//     <br />
//     <Typography className={classes.title1} gutterBottom variant="h5" component="h2">
//             Employees
//           </Typography>
    // <Card className={classes.root1} variant='outlined' wrap>
    //   <CardActionArea>
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="employee" className={classes.avatar}>
    //         S
    //       </Avatar>
    //     }
    //     title="Sangwani Kondowe"
    //     subheader="Field staff"
    //   />

    //   </CardActionArea>  
      
    // </Card>

// </div>
// );
// }


// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Chart from './Chart';


// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: 'none',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

// export default function Dashboard() {
//   const classes = useStyles();

//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   return (
//     <div className={classes.root}>
//       <CssBaseline />

      
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//         <Typography className={classes.title} gutterBottom variant='h5' component="h2">
//           Statistics
//         </Typography>
//           <Grid container spacing={3}>
//             {/* Chart */}
//             <Grid item xs={12} md={8} lg={9}>
//               <Paper className={fixedHeightPaper}>
//                 <Chart />
//               </Paper>
//             </Grid>
             
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
              
//               </Paper>
//             </Grid>
             
//           </Grid> 
//         </Container>
//         <Container maxWidth="lg" className={classes.container}>
//         <Typography className={classes.title} gutterBottom variant='h5' component="h2">
//           josephS
//         </Typography>      
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                 {/* <Deposits /> */}
//               </Paper>
//             </Grid>
        
        
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                 {/* <Deposits /> */}
//               </Paper>
//             </Grid>
             
//         </Container>
//       </main>
//     </div>
//   );
// }