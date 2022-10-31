import React from "react";
import {
  Alert,
  Box,
  FormControl,
  Card,
  Button,
  FormHelperText,
  TextField,
  Grid,
  unstable_composeClasses,
} from "@mui/material";

function ProductsForm() {
  return (
    <div>
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
                  Add Product
                </p>

                <Box sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" } }}>
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
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      type="submit"
                      style={{ fontSize: 16 }}
                    >
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
  );
}

export default ProductsForm;
