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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState, useEffect} from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Supply Chains
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login({onLogin}) {

  const [formData,
    setFormData] = useState({email: "", password: ""});
  const [errors,
    setErrors] = useState([]);

  // handleonchangedata
  function onChangeValue(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  //   handle submitted data
  function handleSubmit(e) {
    e.preventDefault();
    const logInUser = {
      email: formData.email,
      password: formData.password
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logInUser)
    }).then((r) => {
      if (r.ok) {
        r
          .json()
          .then((user) => {
            onLogin(user);
            sessionStorage.setItem("user_id", JSON.stringify(user.id))
            setFormData({
              ...formData,
              email: "",
              password: ""
            });
          });
      } else {
        r
          .json()
          .then((err) => setErrors(err.errors));
      }
    });
  }
  return (

    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{
        height: '100vh'
      }}>
        <CssBaseline/>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
          backgroundImage: 'url(https://www.smartsheet.com/sites/default/files/IC-OG-SupplyChainIpadCartoon.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => t.palette.mode === 'light'
            ? t.palette.grey[50]
            : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography sx={{fontSize:35,fontWeight: 'bold' }}> Supply Chain Made Easy</Typography>
            <Avatar
              sx={{
              m: 1,
              bgcolor: 'blue'
            }}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
            
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
              mt: 1
            }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                name="email"
                value={formData.email}
                onChange={onChangeValue}/>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={onChangeValue}/>
              <FormControlLabel
                control={< Checkbox value = "remember" color = "primary" />}
                label="Remember me"/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                mt: 3,
                mb: 2
              }}>
                Sign In
              </Button>
              <Copyright sx={{
                mt: 5
              }}/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  );

}
export default Login