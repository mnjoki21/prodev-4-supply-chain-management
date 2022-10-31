import React, {useState} from 'react'
import Card from '@mui/material/Card';
import { Alert, Box, FormControl, Button,FormHelperText, TextField, Grid, unstable_composeClasses } from '@mui/material';



const VendorsForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState([]);

   
  
    
  
    return (
      <>
      <Grid  container direction="row" alignItems="center" justifyContent="center" >
        <Box    >
        <Card sx={{ minWidth: 400 }}>
          <main >
          <form  >
            <p style={{fontWeight: "bolder", fontSize: 40 ,alignItems:"center", justifyContent:"center",textAlign:'center'}}>Form</p>
            
            <Box sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },}}>
            
              <div>
                
                <FormControl>
                <FormHelperText id="my-helper-text">Enter your Name</FormHelperText>
                  <TextField 
                  type="text"
                  variant="outlined"
                  label="Full Name"
                  id="name"
                  autoComplete="on"
                  value={name}
                  sx={{ minWidth: 400 }}
                  onChange={(e) => setName(e.target.value)} 
                  />            
                </FormControl>

                <FormControl>
                <FormHelperText id="my-helper-text">Enter your Email</FormHelperText>
                  <TextField 
                  type="email"
                  variant="outlined"
                  label="Email"
                  id="email"
                  autoComplete="on"
                  value={email}
                  sx={{ minWidth: 400 }}
                  onChange={(e) => setEmail(e.target.value)} 
                  />            
                </FormControl>


                <FormControl>
                <FormHelperText id="my-helper-text">Enter your Address</FormHelperText>
                  <TextField 
                  type="text"
                  variant="outlined"
                  label="Address"
                  id="address"
                  autoComplete="on"
                  value={address}
                  sx={{ minWidth: 400 }}
                  onChange={(e) => setAddress(e.target.value)} 
                  />            
                </FormControl>
                <br />
                <FormControl>
                <FormHelperText id="my-helper-text">Enter your Phone Number</FormHelperText>
                  <TextField 
                  type="integer"
                  label="Phone Number"
                  id="phone_number"
                  sx={{ minWidth: 400 }}
                  autoComplete="on"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
                  
                </FormControl>

              </div>
            </Box>
            
            <br />
            <br />
            <div>
              
                  <Box textAlign='center'>
        <Button variant='contained' type="submit" style={{fontSize: 16 }}>
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
      </>
    )
  }
  
  export default VendorsForm



