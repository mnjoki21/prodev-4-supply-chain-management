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
            label="Enter First Name"
            id="name"
            autoComplete="on"
            />

            
               
           
        </FormControl>
        
    </div>
  )
}
