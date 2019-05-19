import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddDialog = ({ isOpen, toggleModal }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={toggleModal}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Email Address'
          type='email'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal} color='primary'>
          Cancel
        </Button>
        <Button onClick={toggleModal} color='primary'>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddDialog.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default AddDialog;
