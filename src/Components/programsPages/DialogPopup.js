

import React from 'react';
import {makeStyles,Dialog, DialogContent, DialogTitle} from '@material-ui/core'

const useStyle = makeStyles( theme => ({
  Container:{
    maxWidth:'300px'
  }

}))





function DialogPopup(props) {
  const {title,children,openPopup,setOpenPopup} = props;
  const classes = useStyle();
  return (
    <Dialog open = {openPopup} className={classes.Container}>
      <DialogTitle>
        <div>I am title</div>
      </DialogTitle>
      <DialogContent>
        
      <div>Hello body</div>
      </DialogContent>





    </Dialog>
    
  );
}

export default DialogPopup;
