import React, { useState, useEffect } from 'react'
import { Alert, Box, FormControl,Card, Button,FormHelperText, TextField, Grid, unstable_composeClasses } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



function ProductsForm() {



  const [category_id, setCategory] = React.useState('');
  const [products, setProducts] = useState([]);
  const [description, setDescription]= useState("")
  const [name, setName]= useState("")
  const [errors, setErrors] = useState([]);


   const [categories, setCategories]= useState([])

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


// fetches categories
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((r) => r.json())
      .then(data =>setCategories(data));
  }, []); 
  const dot={name, description,category_id}

    console.log(dot)

    // function handleOnSubmit(e){
    //   e.preventDefault();
    //   fetch("http://localhost:3000/categories",{
    //       method: "POST",
    //       headers: {
    //           "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({name}),
    //   })
    //   .then((r) => r.json())
    //   .then(response => setCategory(response));
    //   // .then((response) => console.log(response));
    // }


  function handleOnSubmit(e){
    e.preventDefault();

    fetch("http://localhost:3000/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dot),
    })
    .then((r) => r.json())
    .then(response => setProducts(response));
    // .then((response) => console.log(response));
  }


  return (
    <div>
        <Grid  container direction="row" alignItems="center" justifyContent="center" >
      <Box    >
      <Card sx={{ minWidth: 400 }}>
        <main >
        <form  >
          <p style={{fontWeight: "bolder", fontSize: 40 ,alignItems:"center", justifyContent:"center",textAlign:'center'}}>Add Product</p>
          
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },}}>
          
            <div>
              
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Enter Product Name</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Product Name"
                id="name"
                autoComplete="on"
                value={name}
                sx={{ minWidth: 400 }}
                onChange={(e) => setName(e.target.value)} 
                />
               
              </FormControl>
              <br />
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Enter Product Description</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Product Description"
                id="description"
                autoComplete="on"
                value={description}
                sx={{ minWidth: 400 }}
                onChange={(e) => setDescription(e.target.value)} 
                />
               
              </FormControl>
              <br />

              <FormControl >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          type="number"
          label="Category"
          sx={{ minWidth: 400 }}
          onChange={handleChange}
        >  
        {categories.map((item)=>

           
            <MenuItem value={item.id}  key={item.id}>{item.name}</MenuItem>
        )}
        </Select>
      </FormControl>
         <br />
              <Box sx={{ minWidth: 120 }}> 

     </Box> 
            </div>
          </Box>
          
          <br />
          <br />
          <div>
            
                <Box textAlign='center'>
      <Button variant='contained' onClick={handleOnSubmit}   type="submit" style={{fontSize: 16 }}>
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



    </div>
  )
}

export default ProductsForm





