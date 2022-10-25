
import { Alert, Box, FormControl, Button,FormHelperText, TextField, Grid } from '@mui/material';
import React , { useState}from 'react';  
import Login from '../Register/Login';
import Card from '@mui/material/Card';


const CategoriesForm= () => {
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);
  

  return (
    <>
    <Grid  container direction="row" alignItems="center" justifyContent="center" >
      <Box    >
      <Card sx={{ minWidth: 400 }}>
        <main >
        <form  >
          <p style={{fontWeight: "bolder", fontSize: 40 ,alignItems:"center", justifyContent:"center",textAlign:'center'}}>New Category</p>
          
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },}}>
          
            <div>
              
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Category Name"
                id="category"
                autoComplete="on"
                value={category}
                sx={{ minWidth: 400 }}
                onChange={(e) => setCategory(e.target.value)} 
                />
               
              </FormControl>
              <br />
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

export default CategoriesForm