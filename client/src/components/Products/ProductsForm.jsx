import {Alert,Box,FormControl,Button,FormHelperText,TextField, Grid,} from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";


function ProductsForm() {

  // const [ product, setProduct = useState([]);  
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
    // .then(response => setProducts(response))
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
                      fontSize: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    New Product
                  </p>
                            {/* <Box sx={{display: 'flex' }}> */}


                  <Box sx={ { "& .MuiTextField-root": { m: 1, width: "35ch" } } }>
                    <div>
                      <FormControl>
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product Name"
                          // autoComplete="on"
                          value={formData.name}
                          sx={{ minWidth: 400 }}
                          // onChange={(e) => setProduct(e.target.value)}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product Description"
                          id="description"
                          // autoComplete="on"
                          value={formData.description}
                          sx={{ minWidth: 400 }}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product id"
                          id="id"
                          // autoComplete="on"
                          value={formData.category_id}
                          sx={{ minWidth: 400 }}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        {/* <FormHelperText id="my-helper-text">Category</FormHelperText> */}
                        <TextField
                          type="text"
                          variant="outlined"
                          label="Enter Product Threshold"
                          id="threshold"
                          // autoComplete="on"
                          value={formData.threshold}
                          sx={{ minWidth: 400 }}
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
}

export default ProductsForm





