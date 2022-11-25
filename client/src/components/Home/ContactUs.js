import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { contactUs } from '../../actions/unprotected'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ContactUs = () => {
  const initialFormData={
    name:"",
    email:"",
    subject:"",
    message:""
  }
  const [formData,setFormData]=useState(initialFormData)
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  function onSubmit(){
    handleClick()
    contactUs(formData)
  }
  return (
    <div className='background'>
      <h1 className="contact-header">Contact Us</h1>
      <Grid
      container
      direction="row"
      justifyContent="space around"
      alignItems="center"
      >
        <Grid item sm={7}>
          <div className='contact-form-container'>
          <TextField
            variant="standard"
            label="Name" 
            sx={{width:'80%',mb:4}} 
            value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
            focused
          />
          
          <TextField
            variant="standard"
            label="Email" 
            sx={{width:'80%',mb:4}} 
            value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            focused
          />
          <TextField
            variant="standard"
            label="Subject" 
            sx={{width:'80%',mb:4}} 
            value={formData.subject}
            onChange={(e)=>setFormData({...formData,subject:e.target.value})}
            focused
          />
          <TextField
            variant="standard"
            label="Message" 
            sx={{width:'80%',mb:4}} 
            value={formData.message}
            onChange={(e)=>setFormData({...formData,message:e.target.value})}
            multiline 
            rows={4}
            focused
          />
          <Button sx={{width:'50%',mb:5}} variant="contained" onClick={onSubmit}>SEND</Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Message successfully sent to admin team.
            </Alert>
          </Snackbar>
          </div>
        </Grid>
        <Grid item sm={5} className="contact-background-image">

        </Grid>
      </Grid>
    </div>
  )
}

export default ContactUs