import { Avatar, Button } from '@mui/material'
import React from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{border:"2px solid red",display:"flex",marginTop:"20px",justifyContent:"space-between"}}>
    <div style={{border:"2px solid red",width : "25%",height:"80vh",padding:"10px" }}>
        <h2 style={{margin:"5px 0px"}}>My Profile</h2>
        <div style={{display:"flex"}}>
        <div><Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 170, height: 170, borderRadius:2}}
/></div>
        <div style={{textAlign:"right",width:"100%"}}>
        {/* <Button
    sx={{ width: 70, height: 30}}
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<EditRoundedIcon />}
>
  Edit
  <VisuallyHiddenInput type="file" />
</Button> */}

<Button  style={{background:"#2196f3", color:"white",padding:5}} variant="outlined" onClick={handleClickOpen}>
      <EditRoundedIcon style={{color:"white",height:20}} />  Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle style={{width:"30vw"}}>Update Your Profile</DialogTitle>
        <DialogContent>
        <p>Your Business Name : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="businessname"
            label="Your Business Name"
            type="Text"
            fullWidth
            variant="outlined"
          />
        <p>Email : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        <p>First Name : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="fname"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
          />
        <p>Last Name : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="lname"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
          />
        <p>Phone No. : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="phone"
            label="Phone No."
            type="Number"
            fullWidth
            variant="outlined"
          />
          <p>Pin Code : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="pincode"
            label="Pin Code"
            type="Number"
            fullWidth
            variant="outlined"
          />
          <p>GST Number : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="gstnumber"
            label="GST Number"
            type="Number"
            fullWidth
            variant="outlined"
          />
           <p>Address : </p>
          <TextField
          id="outlined-basic"
            autoFocus
            required
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button  variant="contained" color="error"  onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="success">Submit</Button>
        </DialogActions>
      </Dialog>


<h5  style={{textAlign:"left",margin:"15px 0px 0px 5px", opacity:"0.9",color:"green"}}>
<CircleIcon style={{height:"12px"}} color = "success" />Active User</h5>
<h5 style={{textAlign:"left",margin:"15px 0px 0px 15px", opacity:"0.7"}}>First Name</h5>
<p style={{textAlign:"left",margin:"3px 15px"}}>Yash </p>
<h5 style={{textAlign:"left",margin:"15px 0px 0px 15px", opacity:"0.7"}}>Last Name</h5>
<p style={{textAlign:"left",margin:"3px 15px"}}> Patel</p>
</div>
        
    </div>
    </div>
    <div style={{border:"2px solid red",width:"72%",padding:"10px"}}>
        <h2 style={{margin:"5px 0px"}}>Basic Details</h2>
    </div>
    </div>
  )
}

export default Profile