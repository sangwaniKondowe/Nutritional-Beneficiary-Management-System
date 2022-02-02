import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Card, CardContent, CardMedia, Avatar, IconButton, Toolbar, CardHeader } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';

import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StaffForm from './Users/StaffForm';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

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
          },
     
  }));

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });





  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


export default function FieldStaff(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            
            <Typography variant='h3' gutterBottom>Field staff</Typography>

            
                    <Tooltip title="Add field staff">
                    <Fab color="primary" className={classes.absolute} >
                        <AddIcon onClick={handleClickOpen}/>
                    </Fab>
                    </Tooltip>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add field Staff
                        </DialogTitle>
                        <DialogContent dividers>
                            <StaffForm />
                        </DialogContent>
                    </Dialog>

            <Paper className={classes.paper}>
            
                
                    <Card className={classes.card}>
                    <CardMedia align="center">
                        <Avatar
                        alt="Remy Sharp"
                        src={props?.content?.picture?.large}
                        className={classes.large}
                        />
                
                        {/* <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton> */}
        
                    </CardMedia>

                {/* <CardHeader
                    avatar={
                        <Avatar
                        alt="Remy Sharp"
                        src={props?.content?.picture?.large}
                        className={classes.large}
                        />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }/> */}
                    
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
                            {props?.content?.location?.district}, {props?.content?.location?.area}
                            </Typography>{" "}
                        </CardContent>
                    </Card>
                
            </Paper>

        </div>
    )
}
