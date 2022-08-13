import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import swal from 'sweetalert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {getData, postData, postDataAndImage} from '../../component/User/FetchNodeServices';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registration(props) {
  const classes = useStyles();
  const [getName, setName]=useState("");
  const [getLname, setLname]=useState("");
  const [getGender, setGender]=useState("");
  const [getContact, setContact]=useState("");
  const [getAddress, setAddress]=useState("");
  const [getState, setState]=useState("");
  const [getCity, setCity]=useState("");
  const [getPincode, setPincode]=useState("");
  const [getEmail, setEmail]=useState("");
  const [getPassword, setPassword]=useState("");
  const [getIcon, setIcon]=useState({icon:'', file:''})

  const handelSubmit=async()=>{
    var formData = new FormData()
        formData.append('name',getName);
        formData.append('lname',getLname)
        formData.append('gender',getGender)
        formData.append('contact',getContact)
        formData.append('address',getAddress)
        formData.append('state',getState)
        formData.append('city',getCity)
        formData.append('pincode',getPincode)
        formData.append('email',getEmail)
        formData.append('password',getPassword)
        formData.append('image',getIcon.file)
    var config = {header:{'content-type':'multipart/form-data'}} 
    var result = await postDataAndImage("userReg/insertData",formData,config);
    console.log("showData---",result);
    if (result) {
      swal("Record Submitted...", "success");
    } else {
      swal("Fail to submit record...", "error");
    }

  }

  // image handle
  const handleIcon=(event)=>{
    setIcon({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e)=>setName(e.target.value)}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lname"
              autoComplete="last name"
              autoFocus
              onChange={(e)=>setLname(e.target.value)}
            />   
          
            <FormControl component="fieldset">
              <FormLabel component="legend"><span className="genderId">Gender</span></FormLabel>
              <div className="radioId">
                  <Radio
                  checked={getGender === 'male'}
                  onChange={(e)=>setGender(e.target.value)}
                  value="male"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />Male
                <Radio
                  checked={getGender === 'female'}
                  onChange={(e)=>setGender(e.target.value)}
                  value="female"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />Female
              </div>
            </FormControl>
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact Number"
              name="contact"
              autoComplete="contact"
              autoFocus
              onChange={(e)=>setContact(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
              onChange={(e)=>setAddress(e.target.value)}
            />
           
           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="state"
              label="state"
              name="state"
              autoComplete="state"
              autoFocus
              onChange={(e)=>setState(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
              onChange={(e)=>setCity(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pincode"
              label="Pincode"
              name="pincode"
              autoComplete="pincode"
              autoFocus
              onChange={(e)=>setPincode(e.target.value)}
            />   

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="ImageId">
                 <Grid container spacing={3}>
                   <Grid item xs={6} sm={6} md={6} lg={6}>
                   <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      style={{display:'none'}}
                      onChange={(event)=>handleIcon(event)}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span" 
                      startIcon={<CloudUploadIcon / >}
                       >
                        Upload
                      </Button>
                    </label>
                      </Grid>
                      <Grid item xs={6} className={classes.container}>
                       <Avatar alt="Remy Sharp" variant='rounded' style={{width:70,height:50}} 
                       src={getIcon.icon}
                        />
                      </Grid>
                      </Grid>    
                </div>
           

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>handelSubmit()}
            >
              Sign Up
            </Button>
    
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}