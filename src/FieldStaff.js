import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Card, CardContent, CardMedia, Avatar, IconButton, Toolbar } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    fab: {
        margin: theme.spacing(2),
      },
      absolute: {
        position: 'absolute',
        bottom: theme.spacing(9),
        right: theme.spacing(8),
      },
    text: {
        margin: theme.spacing(0, 0, 0.5),
        //color: theme.palette.secondary.contrastText,
      },
      content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          margin: 0,
      },
      avatar: {
        verticalAlign: "middle",
        marginRight: theme.spacing(0.4),
      },
      paper: {
          padding: theme.spacing(2),
          // textAlign: 'center',
          backgroundColor: '#fafafa',
          height: 'auto',
      }, 
      grow: {
          flexGrow: 1,
        },
        large: {
            width: theme.spacing(6),
            height: theme.spacing(6),
            margin: theme.spacing(2, 2, 0),
          },
      card: {
            borderRadius: 5,
            maxWidth: "200px",
            minWidth: "200px",
            height: "250px",
            backgroundColor: theme.palette.background.card,
          },
          cardContent: {
            padding: theme.spacing(2, 0, 0, 0),
          }
     
  }));

export default function FieldStaff(props) {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            
            <Typography variant='h3' gutterBottom>Field staff</Typography>

            
                    <Tooltip title="Add field staff">
                    <Fab color="primary" className={classes.absolute} >
                        <AddIcon />
                    </Fab>
                    </Tooltip>
               

            <Paper className={classes.paper}>
            
                
                    <Card className={classes.card}>
                    <CardMedia align="center">
                        <Avatar
                        alt="Remy Sharp"
                        src={props?.content?.picture?.large}
                        className={classes.large}
                        />
                    </CardMedia>
                    
                        <CardContent className={classes.cardContent}>
                            <Typography
                            className={classes.text}
                            color="textSecondary"
                            variant="h6"
                            align="center"
                            >
                            {props?.content?.name?.first} {props?.content?.name?.last}
                            </Typography>
                            <Typography
                            className={classes.text}
                            color="textSecondary"
                            variant="subtitle1"
                            align="center"
                            >
                            <AlternateEmailIcon className={classes.avatar} fontSize="small" />
                            {props?.content?.email}
                            </Typography>{" "}
                            <Typography
                            className={classes.text}
                            color="textSecondary"
                            variant="subtitle1"
                            align="center"
                            >
                            <PhoneIcon className={classes.avatar} fontSize="small" />
                            {props?.content?.cell}
                            </Typography>{""}
                            <Typography
                            className={classes.text}
                            color="textSecondary"
                            variant="subtitle1"
                            align="center"
                            >
                            <LocationOnIcon className={classes.avatar} fontSize="small" />
                            {props?.content?.location?.city}, {props?.content?.location?.country}
                            </Typography>{" "}
                        </CardContent>
                    </Card>
                
            </Paper>

        </div>
    )
}
