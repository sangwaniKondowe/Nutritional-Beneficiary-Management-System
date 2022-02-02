import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Card, CardContent, CardMedia, Avatar, IconButton, Toolbar, CardHeader, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiFormControl-root': {
          width: '80%',
          margin: theme.spacing(1),
          
      }
    },
    root1: {
          margin: theme.spacing(1),
          textTransform: 'none',
    },
    content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          margin: 0,
      },
    
     
  }));

  const initialValues = {
      Firstname: '',
      Lastname: '',
      Email: '',
      Phone: '',
      District: '',
      Area: '',
      Gender: 'male',
  }




export default function StaffForm() {
    const classes = useStyles();
    const [ values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name] : value
        })
    }



    return (
        <div className={classes.content}>
           <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant='standard'
                            label='First name'
                            name='Firstname'
                            value={values.Firstname}
                            onChange={handleInputChange}
                        >
                        </TextField>
                        <TextField
                            variant='standard'
                            label='Last name'
                            name='Lastname'
                            value={values.Lastname}
                            onChange={handleInputChange}
                        >
                        </TextField>
                        <TextField
                            variant='standard'
                            label='Email'
                            name='Email'
                            value={values.Email}
                            onChange={handleInputChange}
                        >
                        </TextField>
                        <TextField
                            variant='standard'
                            label='Phone'
                            name='Phone'
                            value={values.Phone}
                            onChange={handleInputChange}
                        >
                        </TextField>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                            name='Gender'
                            value={values.Gender}
                            onChange={handleInputChange}
                            >
                                <FormControlLabel value='male' control={<Radio />} label='Male' />
                                <FormControlLabel value='female' control={<Radio />} label='Female' />
                            </RadioGroup>
                        </FormControl>

                        <TextField
                            variant='standard'
                            label='District'
                            name='District'
                            value={values.District}
                            onChange={handleInputChange}
                        >
                        </TextField>
                        <TextField
                            variant='standard'
                            label='Area'
                            name='Area'
                            value={values.Area}
                            onChange={handleInputChange}
                        >
                        </TextField>

                        <div >
                            <Button variant="contained" type='submit' color='primary' size='large' className={classes.root1}>Submit</Button>
                            <Button variant="contained" type='submit' size='large' className={classes.root1}>Reset</Button>
                        </div>
                    </Grid>
                </Grid>
           </form>
        </div>
    )
}