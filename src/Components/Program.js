


// import './programm.css'




// function Program() {
    
//     return (
        
//         <div>
          
//         <div className='programmsBox'>
//             <div className='programmsItem'> 
            
//             <Link className="programTitle" to="/programs/intervetions">School Health and Nutrition</Link>
//             <div className='programDiscription'>
//             {/* <img src ="./projectImages/school3.jpg" style={{height:"100px" ,width:"120px"}}/> */}
//                 </div>
//             <div>
            
//             </div>
//             </div>

//             <div className='programmsItem'> 
//             <Link className="programTitle" to="/programs/adolescentnutrion" >Adolescent Nutrition</Link>
//             <div className='programDiscription'>
//             <img src ="./projectImages/adolescentNutrition1.png" style={{height:"100px" ,width:"120px"}}/>
//                 </div>
//             <div>
            
//             </div>
//             </div>

//             <div className='programmsItem'> 
//             <Link className="programTitle" to="/programs/WaterSanitationAndHygiene">Water Sanitation And Hygiene</Link>
//             <div className='programDiscription'>
//             <img src ="./projectImages/water1.jpg" style={{height:"100px" ,width:"120px"}}/>
//                 </div>
//             <div>
            
//             </div>
//             </div>
            
            
            
//         </div>


        
//         <div className='programmsBox2 '>
//             <div className='programmsItem'> 
            // <Link className="programTitle" to="/programs/IntegratedHomeStead">Integrated Homestead Agriculture</Link>
//             <div className='programDiscription'>
//             <img src ="./projectImages/Homestead.jpg" style={{height:"100px" ,width:"120px"}}/>
//                 </div>
//             <div>
            
//             </div>
//             </div>

//             <div className='programmsItem'> 
//             <Link className="programTitle" to="/programs/InfantAndYoungChild">Infant and Young Child Feeding</Link>
//             <div className='programDiscription'>
//             <img src ="./projectImages/IYCF1.jpg" style={{height:"100px" ,width:"120px"}}/>
//                 </div>
//             <div>
            
//             </div>
//             </div>

//             <div className='programmsItem'> 
//             <Link className="programTitle">Community Management Malnutrition</Link>
//             <div className='programDiscription'>
//             <img src ="./projectImages/acute.jpg" style={{height:"100px" ,width:"120px"}}/>
//                 </div>
//             <div>
            
//             </div>
//             </div>
            
            
            
//         </div>
        
         
     

//         </div>
    
//     )
// }

// export default Program

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
  


export default function Program() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <Typography variant='h3' gutterBottom> Programs</Typography>
            <Grid container spacing={3} direction='row'>      
            <Grid item >
            <Link  to="/programs/intervetions" className={classes.link}>
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
                    <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est felis, 
                            varius vel sagittis non, mattis vitae nulla. Sed viverra accumsan purus 
                            quis dictum. Sed mi nibh, finibus non eleifend eu, bibendum eu enim.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>
        
            
            <Grid item >
            <Link to="/programs/adolescentnutrion" className={classes.link}>
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
                    <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est felis, 
                            varius vel sagittis non, mattis vitae nulla. Sed viverra accumsan purus 
                            quis dictum. Sed mi nibh, finibus non eleifend eu, bibendum eu enim.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>

            <Grid item >
            <Link to="/programs/WaterSanitationAndHygiene" className={classes.link}>
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
                    <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est felis, 
                            varius vel sagittis non, mattis vitae nulla. Sed viverra accumsan purus 
                            quis dictum. Sed mi nibh, finibus non eleifend eu, bibendum eu enim.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>

            <Grid item >
            <Link to="/programs/dam" className={classes.link}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="program"
                    height="190"
                    image="/images/homestead.jfif"
                    title=" Integrated Homestead Agriculture"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Integrated Homestead Agriculture
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est felis, 
                            varius vel sagittis non, mattis vitae nulla.  
                            
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>

            <Grid item>
            <Link to="/programs/InfantAndYoungChild" className={classes.link}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="program"
                    height="190"
                    image="/images/infantFeeding.jpg"
                    title=" Infant and Young Child Feeding"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Infant & Young Child Feeding
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est felis, 
                            varius vel sagittis non, mattis vitae nulla.  
                            
                    </Typography>
                    </CardContent>
                </CardActionArea>
                
                </Card>
                </Link>
            </Grid>

            <Grid item >
            <Link  className={classes.link}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="program"
                    height="190"
                    image="/images/malnutrition.jpg"
                    title=" Community Management Malnutrition"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Community Management Malnutrition
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet.
                        
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