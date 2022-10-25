import { Alert, Box, FormControl, Button,FormHelperText, TextField, Grid } from '@mui/material';
import React , { useState}from 'react';  
import Card from '@mui/material/Card';


const PurchaseOrderForm = () => {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [vendor , setVendor]=useState("")
  const [orderNo , setOrderNo]=useState("")
  const [errors, setErrors]= useState([])
 

  

  return (
    <>
    <Grid  container direction="column" rowSpacing={1} columnSpacing={{xs: 1,sm:2,md:3}} alignItems="center" justifyContent="center" >
      <Box    >
      <Card sx={{ minWidth: 300 }}>
        <main >
        <form  >
          <p style={{fontWeight: "bolder", fontSize: 20 ,alignItems:"center", justifyContent:"center",textAlign:'center'}}> Purchase Order Form</p>
          
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },}}>
          
            <div>
            <Grid item xs={6}>
              <FormControl>
              <FormHelperText id="my-helper-text">Order No.</FormHelperText>
                <TextField 
                type="number"
                variant="outlined"
                label="Order No."
                id="orderNo"
                autoComplete="on"
                value={orderNo}
                sx={{ minWidth: 300 }}
                onChange={(e) => setOrderNo(e.target.value)} 
                />
               
              </FormControl>
              </Grid>
              <Grid item xs={6}>
              <FormControl>
              <FormHelperText id="my-helper-text">Product</FormHelperText>
                <TextField 
                type="text"
                variant="outlined"
                label="Product"
                id="product"
                autoComplete="on"
                value={product}
                sx={{ minWidth: 300 }}
                onChange={(e) => setProduct(e.target.value)} 
                />
               
              </FormControl>
              </Grid>
              <br />
              <Grid item xs={6}>
              <FormControl>
              <FormHelperText id="my-helper-text">Vendor</FormHelperText>
                <TextField 
                type="text"
                label="vendor"
                id="vendor"
                sx={{ minWidth: 300 }}
                autoComplete="vendor"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                />
                
              </FormControl>
              </Grid>
              <Grid item xs={6}>
              <FormControl>
              <FormHelperText id="my-helper-text">Quantity</FormHelperText>
                <TextField 
                type="number"
                label="quantity"
                id="quantity"
                sx={{ minWidth: 300 }}
                autoComplete="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                />
                
              </FormControl>
              </Grid>
              <Grid item xs={6}>
              <FormControl>
              <FormHelperText id="my-helper-text">Amount</FormHelperText>
                <TextField 
                type="number"
                label="amount"
                id="amount"
                sx={{ minWidth: 300 }}
                autoComplete="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
                
              </FormControl>
              </Grid>
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

export default PurchaseOrderForm