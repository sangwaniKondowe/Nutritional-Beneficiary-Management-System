

import React from 'react'
import {Link} from "react-router-dom"
import clsx from 'clsx';
import { Typography, Paper, Grid, Card, CardContent, CardMedia, Avatar, IconButton, Toolbar, CardHeader, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 330,
      },
    appBarSpacer: theme.mixins.toolbar,
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    link: {
        textDecoration: 'none',
        transitionDuration: 20,
    }
  }));
  


export default function Reports() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <Typography variant='h3' gutterBottom> Programs Report</Typography>
            <Grid container spacing={3} direction='row'>      
            <Grid item >
            <Link  to="/Report/AdolescentNutritionReport"className={classes.link}>
              <Card className={classes.root} elevation={4}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="program"
                    height="190"
                    image="/images/school-meals-world-health-day.jpg"
                    title="School Health and Nutrition"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            School Health and Nutrition
                        </Typography>
                    
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>
        
            
            <Grid item >
            <Link to="/Report/AdolescentNutritionReport" className={classes.link}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="program"
                    height="190"
                    image="/images/adolescent nutrition.jpg"
                    title="Adolescent Nutrition"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Adolescent Nutrition
                        </Typography>
                    
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>

            <Grid item >
            <Link to="/Report/AdolescentNutritionReport" className={classes.link}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="program"
                    height="190"
                    image="/images/waterSanitation.jpg"
                    title=" Water Sanitation and Hygiene"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Water Sanitation & Hygiene
                        </Typography>
                
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>

        

            
            </Grid>
        </div>
    )
}