
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';

function popup(props) {
    const {title, children ,openPopup,setOpenPopup} = props;
  return (
      <Dialog open={openPopup}>
          <DialogTitle>
              <div>Dialog Title </div>
          </DialogTitle>

          <DialogContent>
              <div>Dialog Content</div>
          </DialogContent>
      </Dialog>

  );
}

export default popup;
