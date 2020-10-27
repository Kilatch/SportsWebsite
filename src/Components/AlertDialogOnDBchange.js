import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialogOnDBchange({op,handleDialog }) {
  const [open, setOpen] = React.useState(op);



  const handleClose = (event) => {
    setOpen(false);
    handleDialog(event.currentTarget.value)
  };

  return (
    <div>
  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to save the changes?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By pressing ok you save the changes to the remote database, this means the data will be 
            available to everyone and might affect their experiens with the database.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} value={0} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} value ={1} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
