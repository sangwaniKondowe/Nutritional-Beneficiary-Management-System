// import React from 'react';
// import { CardHeader, Card, CardActionArea } from '@material-ui/core';

// const useStyles = makeStyles({
//     root: {
//       flexGrow: 1,
//     },
//     root1: {
//         minWidth: 10,
//         minHeight: 150,
//       },
//     avatar: {
//         backgroundColor: red[500],
//       },
//   });
  




// export default function Employee() {
//   const classes = useStyles();
// return (
//  <Card className={classes.root1} variant='outlined' wrap>
//  <CardActionArea>
//  <CardHeader
//    avatar={
//      <Avatar aria-label="employee" className={classes.avatar}>
//        S
//      </Avatar>
//    }
//    title="Sangwani Kondowe"
//    subheader="Field staff"
//  />

//  </CardActionArea>  
 
// </Card>
// )
//  }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';

// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   avatar: {
//     backgroundColor: red[500],
//     alignItems: 'center',
//   },
// }));

// export default function Employee() {
//   const classes = useStyles();



//   return (
//         <div center>
      
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             S
//           </Avatar>
        
//         <Typography>Sangwani Kondowe</Typography>
        
//         </div>
      

//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1.2px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    borderRadius: '3px',
    maxWidth: 150,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  photoContainer: {
    marginBottom: theme.spacing(2),
  }
  
}));

export default function Employee() {
  const classes = useStyles();
  

  return (
    <Grid 
        container 
        alignItems='center' 
        direction='column' 
        className={classes.root}>

        <EmployeeAvatar classes= {classes.avatar}/>

        <EmployeeName />
        <EmployeePos/>
    </Grid>
    );
};

const EmployeeAvatar = ({classes}) => {
    return (
        <div className={classes.photoContainer}>
            <Avatar
            className= {classes.avatar}
            />

        </div>
    );
}
const EmployeeName = () => {
    return (
        <Typography color='textPrimary'>
            Sangwani K
        </Typography>
    )
}
const EmployeePos = () => {
    return (
        <Typography color='textSecondary' variant='caption'>
            Field Staff
        </Typography>
    )
}







    //   <Grid direction='column'>
    // <Card className={classes.root}>
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="employee" className={classes.avatar}>
    //         S
    //       </Avatar>
    //     } 
    //     title="Sangwani Kondowe" 
    //     subheader="Field staff"
    //   />
    // </Card>
    // </Grid>



