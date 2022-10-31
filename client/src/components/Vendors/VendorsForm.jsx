import React from 'react'
import Card from '@mui/material/Card';
import { Alert, Box, FormControl, Button,FormHelperText, TextField, Grid, unstable_composeClasses } from '@mui/material';


export default function VendorsForm() {
  return (
    <div>
        <FormControl>
            <TextField 
            type="text"
            variant="outlined"
            label="Enter Name"
            id="name"
            autoComplete="on"
            />

            <TextField 
            type="text"
            variant="outlined"
            label="Enter Email"
            id="name"
            autoComplete="on"
            />

            <TextField 
            type="text"
            variant="outlined"
            label="Enter Address"
            id="name"
            autoComplete="on"
            />

            <TextField 
            type="text"
            variant="outlined"
            label="Enter Phone Number"
            id="name"
            autoComplete="on"
            />

    
        </FormControl>
        
    </div>
  )
}
