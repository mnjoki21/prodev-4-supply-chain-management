import {Grid, Typography} from "@mui/material";
import {Container} from "@mui/system";
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Fragment, useEffect, useState} from "react";
import {TextField} from '@mui/material';
import { Button , Box, Card} from '@mui/material';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};



function VendorsForm({getItems}) {

//   fetchname
  const[name, setName] = useState("")
  const [errors, setErrors] = useState([])
  
// fetch email
  const[email, setEmail] = useState("")
  
// fetch address
  const[address, setAddress] = useState("")
 

//   fetch phone
  const[phone_number, setPhoneNumber] = useState("")
 

  const [items, setItems] = useState({
    name: "",
    email: "",
    address: "",
    phone_number: ""
  })
  function onDataChange(e) {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const createdItems = {
      name: items.name,
      email: items.email,
      address: items.address,
      phone_number: items.phone_number
    };

    fetch("http://localhost:3000/vendors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdItems),
    })
      .then((res) => res.json())
      .then((newItem) => {
        getItems(newItem);
        setItems({
          ...items,
            name: "",
            email: "",
            address: "",
            phone_number: ""
        });
      });
      
  }

  return (
    <Grid  container direction="row" alignItems="center" justifyContent="center" >
      <Box    >
      <Card sx={{ minWidth: 400 }}>
        <main >
        <form  >
          <p style={{fontWeight: "bolder", fontSize: 40 ,alignItems:"center", justifyContent:"center",textAlign:'center'}}>Add Vendor</p>
          
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },}}>
          
            <div>
              
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Vendor Name"
                id="name"
                autoComplete="on"
                value={name}
                sx={{ minWidth: 400 }}
                onChange={(e) => setName(e.target.value)} 
                />
               
              </FormControl>
              <br />
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Address"
                id="name"
                autoComplete="on"
                value={address}
                sx={{ minWidth: 400 }}
                onChange={(e) => setAddress(e.target.value)} 
                />
               
              </FormControl>
              <br />
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Email"
                id="email"
                autoComplete="on"
                value={email}
                sx={{ minWidth: 400 }}
                onChange={(e) => setEmail(e.target.value)} 
                />
               
              </FormControl>
              <br /><FormControl>
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                <TextField 
                type="number"
                variant="outlined"
                label="Enter Phone Number"
                id="phone_number"
                autoComplete="on"
                value={phone_number}
                sx={{ minWidth: 400 }}
                onChange={(e) => setPhoneNumber(e.target.value)} 
                />
               
              </FormControl>
              <br />
            </div>
          </Box>
          
          <br />
          <br />
          <div>
            
                <Box textAlign='center'>
      <Button variant='contained' onClick={handleSubmit} type="submit" style={{fontSize: 16 }}>
        Submit
      </Button>
     </Box>
              <br />
          
            <div>
              {errors.map((err) => (
              <>
                <Alert key={err} severity="error" sx={{ width: '100%' }}>
                  {err}
                </Alert>
              </>
              ))} 
            </div>       
          </div>
          </form>
        </main>
        </Card>
      </Box>
      </Grid>
  )
}
export default VendorsForm


