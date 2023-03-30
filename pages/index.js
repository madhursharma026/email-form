import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import emailjs from "emailjs-com";

export default function Home() {

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [emailAddress, setEmailAddress] = React.useState("")
  const [service, setService] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const [AlertMessage, setAlertMessage] = React.useState("")
  const [AlertMessageBg, setAlertMessageBg] = React.useState("")


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    emailjs.sendForm(
      "service_pg5pxjd",
      "template_p3qky7p",
      event.target,
      "IKf1WKmDxxkLI6eTQ"
    ).then(res => {
      setFirstName("")
      setLastName("")
      setEmailAddress("")
      setService("")
      setMessage("")
      setAlertMessageBg("success")
      setAlertMessage("Email Sent Successfully!!!")
      handleClick()
    }).catch(err => {
      console.log(err)
      setAlertMessageBg("danger")
      setAlertMessage(err)
      handleClick()
    })
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
          {AlertMessage}
        </Alert>
      </Snackbar>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={6} sx={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)', backgroundRepeat: 'no-repeat', backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900], backgroundSize: 'cover', backgroundPosition: 'center', }} />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
          <Box sx={{ my: 4, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <h1>
              <u>
                Get Quotes
              </u>
            </h1>
            {/* <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}> */}
            <form onSubmit={(e) => handleSubmit(e)} className='mt-3'>
              <div className="row">
                <div className="col-lg-6">
                  <TextField margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="off" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className="col-lg-6">
                  <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="off" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
              </div>
              <TextField margin="normal" type='email' required fullWidth id="emailAddress" label="Email Address" name="emailAddress" autoComplete="off" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
              <select required id="service" name="service" style={{ padding: '15px', width: '100%', fontSize: '16px', marginTop: '10px', borderRadius: '5px', borderColor: 'rgba(0,0,0,0.2)' }} onChange={(e) => setService(e.target.value)} value={service}>
                <option value="">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
                <option value="Service 3">Service 3</option>
              </select>
              <textarea id="message" name="message" placeholder='Your Message!' required rows="10" style={{ padding: '15px', width: '100%', fontSize: '16px', marginTop: '20px', borderRadius: '5px', borderColor: 'rgba(0,0,0,0.2)' }} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit Message
              </Button>
            </form>
            {/* </Box> */}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
