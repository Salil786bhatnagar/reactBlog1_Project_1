import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import {getData,postData,postDataAndImage,ServerURL} from '../User/FetchNodeServices'
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import swal from 'sweetalert';
import Link from '@material-ui/core/Link';


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
  mainTable: {
    padding: "35px 35px 35px 35px",
    backgroundColor: "#efeaea",
  },
  root: {
    display: "flex",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  tablediv: {
    width: 900,
    height: "auto",
  },

  maindiv: {
    // margin:'15px 15px 15px 15px',
  },
  leftside: {
    margin: "10px 10px 10px 10px",
  },
  mainPaper: {
    backgroundColor: "#63596396",
  },
  input: {
    display: "none",
  },

  leftside: {
    margin: "0px 35px 0px 35px",
    padding: "10px 30px 0px 30px",
    width: "35%",
  },

  rightside: {
    width: "35%",
    margin: "0px 35px 0px 35px",
    padding: "10px 0px 0px 0px",
    position: "relative",
    right: "5%",
  },

  leftpaper: {
    backgroundColor: "#63596396",
    padding: "20px 0px 0px 0px",
    position: "relative",
    left: "25%",
  },

  rightpaper: {
    backgroundColor: "#63596396",
    padding: "20px 0px 0px 0px",
    position: "relative",
    left: "25%",
    height: "85%",
  },

  text1: {
    width: "95%",
    margin: "5px 0px 0px 10px",
  },
  text2: {
    width: "95%",
    margin: "5px 0px 0px 10px",
  },
  radioStatus: {
    margin: "10px 0px 0px 30px",
    width: "125%",
  },

  // paperheading:{
  //   height: '10px',
  //   margin: '0px 10px 10px 10px',
  //   padding: '18px 0px 18px 0px',
  //   backgroundColor:'#7d7979',
  //   textAlign: 'center',
  // },

  paperheading2: {
    height: "10px",
    margin: "0px 10px 10px 10px",
    padding: "18px 0px 18px 0px",
    backgroundColor: "#7d7979",
    textAlign: "center",
  },

  subBtn: {
    // margin:'30px 0px 10px 20px',
    margin: "10px 0px 35px 30px",
  },

  reBtn: {
    margin: "10px 0px 0px 160px",
    position: "relative",
    bottom: "56px",
  },

  message: {
    margin: "0px 0px 0px 20px",
    padding: "0px 0px 0px 7px",
    position: "relative",
    bottom: "20px",
  },

  uploadbtn1: {
    margin: "5px 0px 0px 0px",
    position: "relative",
    left: "24px",
  },

  uploadbtn2: {
    position: "relative",
    left: "24px",
    margin: "10px 0px",
  },

  avater1: {
    bottom: "40px",
    position: "relative",
    margin: "0px 0px 0px 216px",
  },
  avater2: {
    bottom: "70px",
    position: "relative",
    margin: "0px 0px 0px 216px",
  },

  updateIcon: {
    position: "relative",
    left: "0px",
  },

  updateAd: {
    position: "relative",
    left: "0px",
  },

  messageImage: {
    margin: "0px 0px 0px 25px",
    position: "relative",
    bottom: "65px",
  },
  status: {
    margin: "5px 0px 0px 22px",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  valImg: {
    position: "relative",
    right: "0%",
    top: "0%",
  },
}));

export default function DisplayAllCategories() {
  const [getCategoryList, setCategoryList] = useState([]);
  const [getOpen, setOpen] = useState(false);

  const classes = useStyles();
  const [getMessage, setMessage]=useState("");
  const [getId, setId]=useState("");
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
  const [getColumn, setColumn] = useState({
    columns: [
      { title: "Id ",       field: "id" },
      { title: "Name",      field: "name" },
      { title: "Last Name", field: "lname" },
      { title: "Gender",    field: "gender" },
      { title: "Contact",   field: "contact" },
      { title: "Address",   field: "address" },
      { title: "State",     field: "state" },
      { title: "City",      field: "city" },
      { title: "Pincode",   field: "pincode" },
      { title: "Email",     field: "email" },
      { title: "Password",  field: "password" },
      {
        title: "Image",
        render: (rowData) => (
          <div>
            <Avatar
              variant="rounded"
              src={`${ServerURL}/images/${rowData.image}`}
            />
          </div>
        ),
      },
    ],
  });

  useEffect(function () {
    dataList();
  }, []);

  const dataList= async()=>{
    let list = await getData("userReg/displayData");
    setCategoryList(list);
  }
  

  const handleDelete = async (oldData) => {
    let body = { id: oldData.id};
    await postData("userReg/deleteRecord", body);
  };

  const handleClickOpen = (rowData) => {
    setOpen(true);
    setId(rowData.id);
    setName(rowData.name);
    setLname(rowData.lname);
    setGender(rowData.gender);
    setContact(rowData.contact);
    setAddress(rowData.address);
    setState(rowData.state);
    setCity(rowData.city);
    setPincode(rowData.pincode);
    setEmail(rowData.email);
    setPassword(rowData.password);
    setIcon({ icon: `${ServerURL}/images/${rowData.image}`, file: "" });
  };

  const handleClose = () => {
    setOpen(false);
    dataList();
  };

  /* handle in icon*/
  const handleIcon = (event) => {
    setIcon({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };
 

  /* handle submit*/
   const handleEditData=async()=>{
        var formData = new FormData()
            formData.append('id',getId);
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
        var result = await postDataAndImage("userReg/editDataImage",formData,config);
        console.log("showData---",result);
        if (result) {
          swal("You are!", "Data Update!", "success");
        } else {
          swal("Fail to!", "Server No Update!", "error");
        }
    
      }
  // end

  const editDialog = () => {
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open alert dialog
          </Button> */}
          <Dialog
          open={getOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Update Categories"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className={classes.paper}>
                <Paper className={classes.mainPaper}>
                  <Grid contianer spacing={2}>
                    {/* <div className={classes.div1}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper className={classes.paperheading}>
                            <Typography><b>Add Category </b></Typography>
                        </Paper>
                      </Grid>
                    </div>  */}
                  </Grid>
                  <div className={classes.div2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Last Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                onChange={(e)=>setName(e.target.value)}
                              value={getName}
                                /> 
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
        
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
                                value={getLname}
                                />  
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl component="fieldset">
                                <FormLabel component="legend"><span className="genderId">Gender</span></FormLabel>
                                <div className="radioId">
                                    <Radio
                                    checked={getGender === 'male'}
                                    onChange={(e)=>setGender(e.target.value)}
                                    value="male"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    value={getGender}
                                    />Male
                                    <Radio
                                    checked={getGender === 'female'}
                                    onChange={(e)=>setGender(e.target.value)}
                                    value="female"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    value={getGender}
                                    />Female
                                </div>
                                </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
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
                                value={getContact}
                                />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>

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
                                value={getAddress}
                                />
                      </Grid>

                      <Grid item xs={6} sm={6} md={6} lg={6}>
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
                                value={getState}
                                />

                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        
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
                                value={getCity}
                                />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        
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
                                value={getPincode}
                                />   

                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e)=>setEmail(e.target.value)}
                        value={getEmail}
                        />   

              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        onChange={(e)=>setPassword(e.target.value)}
                        value={getPassword}
                        />   

                      </Grid>

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
                           <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon/>}>
                            Upload Icon
                          </Button>
                        </label>
                      </Grid>
                      <Grid item xs={6} className={classes.container}>
                        {/* <Avatar
                          alt="Remy Sharp"
                          variant="rounded"
                          className={classes.updateIcon}
                          style={{ width: 70, height: 50 }}
                          src={getIcon.icon}
                        /> */}
                      </Grid>
                      <Grid item xs={6} className={classes.container}>
                       <span className="imgClass">
                        <Avatar alt="Remy Sharp" variant='rounded' style={{width:70,height:50}} 
                        src={getIcon.icon}
                            />
                         </span>   
                        </Grid>
                      
                    </Grid>
                    <div className={classes.div3}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
                        <Grid item xs={12} className={classes.container}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={()=>handleEditData()}
                          >
                           Update
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          {/* <Button variant="contained" color="primary" onClick={()=>ClearData()}>Reset</Button> */}
                        </Grid>
                        {/* <Grid item xs={12}>
                          <b>Message:</b>&nbsp;&nbsp;{getMessage}
                        </Grid> */}
                      </Grid>
                    </div>
                  </div>
                </Paper>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
                Disagree
              </Button> */}
            <Button onClick={handleClose} color="primary" autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <div className={classes.mainTable}>
      <MaterialTable
        title="Category List"
        columns={getColumn.columns}
        data={getCategoryList}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit",
            onClick: (event, rowData) => handleClickOpen(rowData),
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setColumn((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

                const data = [...getCategoryList];
                data.splice(data.indexOf(oldData), 1);
                setCategoryList(data);
                handleDelete(oldData);
              }, 600);
            }),
        }}
      />
      {editDialog()}
    </div>
  );
}
