import React from 'react'

function ProductsForm() {
  return (
    <div>ProductsForm</div>
  )
 
  

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

                  <Box sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" } }}>
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
                          onChange={(e) => setProduct(e.taget.value)}
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

export default ProductsForm;
