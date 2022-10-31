<<<<<<< HEAD
import {Alert,Box,FormControl,Button,FormHelperText,TextField, Grid,} from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
=======
import React from 'react'
import { Alert, Box, FormControl,Card, Button,FormHelperText, TextField, Grid, unstable_composeClasses } from '@mui/material';
>>>>>>> 89b4406a (Add: product Form)



function ProductsForm() {

<<<<<<< HEAD
  // const [ product, setProduct ] = useState([]);
  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
    category_id: '',
    threshold: ''
  })

  // function handleChange(e) {
  //   setProduct({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  // function handeSubmit(e) {
  //   e.preventDefault();
  //   const createdProducts = {
  //     name: formData.name,
  //     description: formData.description,
  //     category_id: formData.category_id,
  //     threshold: formData.threshold
  //   }
  
  const url = "http://localhost:3000/products"

  function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData)
    })
    setFormData({
      name: '',
      description: '',
      category_id: '',
      threshold: ''
    })
    //   .then((r) => r.json())
    // .then(response => setProduct(response))
    console.log(formData)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }
  

  return (
    <>
      <>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Card sx={{ minWidth: 400 }}>
              <main>
                <form>
                  <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    New Product
                  </p>
                  {/* <Box sx={{display: 'flex' }}> */}

                  <Box sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" } }}>
                    <div>
                      <FormControl>
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product Name"
                          // autoComplete="on"
                          sx={{ minWidth: 300 }}
                          value={formData.name}
                          name="name"
                          // onChange={(e) => setProduct(e.target.value)}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl >
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product Description"
                          // id="description"
                          name="description"
                          // autoComplete="on"
                          sx={{ minWidth: 300 }}
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </FormControl>
                      {/* <FormControl> */}
                      {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                      {/* <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product id"
                          id="id" */}
                      {/* // name='category_id'
                          // autoComplete="on"
                          // sx={{ minWidth: 400 }}
                          // value={formData.category_id}
                          // onChange={handleChange} */}
                      {/* /> */}
                      {/* </FormControl> */}
                      <FormControl>
                        <InputLabel>Category</InputLabel>
                        <Select
                          variant="outlined"
                          value={formData.category_id}
                          label="Product"
                          name="category_id"
                          sx={{ minWidth: 300 }}
                          onChange={handleChange}
                          // {...categories.map((category) => (
                          //   <option value={ category.id }>{category.name}</option>
                          // ))}
                        ></Select>
                      </FormControl>
                      <FormControl>
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product Threshold"
                          id="threshold"
                          name="threshold"
                          // autoComplete="on"
                          sx={{ minWidth: 300 }}
                          value={formData.threshold}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <br />
                    </div>
                  </Box>

                  <br />
                  <br />
                  <div>
                    <Box textAlign="center">
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        type="submit"
                        style={{ fontSize: 16 }}
                      >
                        Submit
                      </Button>
                    </Box>
                    <br />
                    {/* 
                    <div>
                      {errors.map((err) => (
                        <>
                          <Alert
                            key={err}
                            severity="error"
                            sx={{ width: "100%" }}
                          >
                            {err}
                          </Alert>
                        </>
                      ))}
                    </div> */}
                  </div>
                </form>
              </main>
            </Card>
          </Box>
        </Grid>
      </>
    </>
  );
=======





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
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
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
              {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Product Description"
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
                label="Select Product category"
                id="name"
                autoComplete="on"
                value={name}
                sx={{ minWidth: 400 }}
                onChange={(e) => setName(e.target.value)} 
                />
               
              </FormControl>
            </div>
          </Box>
          
          <br />
          <br />
          <div>
            
                <Box textAlign='center'>
      <Button variant='contained'  type="submit" style={{fontSize: 16 }}>
        Submit
      </Button>
     </Box>
              <br />
          
            <div>
              {/* {errors.map((err) => (
              <>
                <Alert key={err} severity="error" sx={{ width: '100%' }}>
                  {err}
                </Alert>
              </>
              ))}  */}
            </div>       
          </div>
          </form>
        </main>
        </Card>
      </Box>
      </Grid>



    </div>
  )
>>>>>>> 89b4406a (Add: product Form)
}

export default ProductsForm





