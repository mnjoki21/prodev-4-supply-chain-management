import { Alert, Box, FormControl, Button,FormHelperText, TextField, Grid } from '@mui/material';
import React , { useState}from 'react';  
import Login from '../Register/Login';
import Card from '@mui/material/Card';


const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              <FormHelperText id="my-helper-text">Enter your Email Address</FormHelperText>
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
              <br />
              <FormControl>
              <FormHelperText id="my-helper-text">Enter your password</FormHelperText>
                <TextField 
                type="password"
                label="Password"
                id="password"
                sx={{ minWidth: 400 }}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                
              </FormControl>
            </div>
          </Box>
          
          <br />
          <br />
          <div>
            
                <Box textAlign='center'>
      <Button variant='contained' type="submit" style={{fontSize: 16 }}>
        Login
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

export default User