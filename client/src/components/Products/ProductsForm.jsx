import {Alert,Box,FormControl,Button,FormHelperText,TextField, Grid,} from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";


function ProductsForm() {
  const [ formData, setFormData ] = useState({
    id:'',
    name: '',
    description: '',
    threshold:''
  })
  const url = "http://lovalhost:3000/products"

  function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      Headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    setFormData({
      id: '',
      name: '',
      description: '',
      threshold:''
    })
    console.log(formData)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.taget.name]: e.target.value
    })
  }

  

  return (
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
                  Form
                </p>

                <Box sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" } }}>
                  <div>
                    <FormControl>
                      <FormHelperText id="my-helper-text">
                        Enter your Name here
                      </FormHelperText>
                      <TextField
                        type="text"
                        variant="outlined"
                        label="Name"
                        autoComplete="on"
                        value={name}
                        sx={{ minWidth: 400 }}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <FormHelperText>Enter description here</FormHelperText>
                      <TextField
                        type="text"
                        label="text"
                        sx={{ minWidth: 400 }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </FormControl>
                    <br />
                    <FormControl>
                      <FormHelperText>Enter threshold here</FormHelperText>
                      <TextField
                        type="text"
                        label="text"
                        sx={{ minWidth: 400 }}
                        value={threshold}
                        onChange={(e) => setThreshold(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </Box>

                <br />
                <br />
                <div>
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      type="submit"
                      style={ { fontSize: 16 } }
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Box>
                  <br />

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
                  </div>
                </div>
              </form>
            </main>
          </Card>
        </Box>
      </Grid>
    </>
  );
}

export default ProductsForm;
