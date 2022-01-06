import React from 'react';
import { CardHeader, Card, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    root1: {
        minWidth: 10,
        minHeight: 150,
      },
    avatar: {
        backgroundColor: red[500],
      },
  });
  




export default function Employee() {
  const classes = useStyles();
return (
 <Card className={classes.root1} variant='outlined' wrap>
 <CardActionArea>
 <CardHeader
   avatar={
     <Avatar aria-label="employee" className={classes.avatar}>
       S
     </Avatar>
   }
   title="Sangwani Kondowe"
   subheader="Field staff"
 />

 </CardActionArea>  
 
</Card>
)
 }