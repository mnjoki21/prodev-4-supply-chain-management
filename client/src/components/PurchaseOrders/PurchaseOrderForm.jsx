import { Alert, Box, FormControl, Button,FormHelperText, TextField, Grid, useStepContext } from '@mui/material';
import React , { useState, useEffect}from 'react';  
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const PurchaseOrderForm = () => {
  const [product_id, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [vendor_id , setVendor]=useState("")
  const [ordernumber , setOrdernumber]=useState("")
  
  const [errors, setErrors]= useState([])
 

  // const history = useNavigate();  

  const [vendors, setVendors]= useState([])
  const handleChange = (event) => {
    setVendor(event.target.value);
  };

  const [products, setProducts]= useState([])
  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/vendors")
      .then((r) => r.json())
      .then(data =>setVendors(data));
  }, []);


  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then(data =>setProducts(data));
  }, []);




  const [purchaseorder, setPurchaseorder]=useState([])




  function handleOnSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/purchaseorders",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                 product_id,
                 amount,
                quantity, 
                 vendor_id,
                ordernumber : ordernumber,
              }),
    })
    .then((r) => r.json())
    .then(response => setPurchaseorder(response));
    // .then((response) => console.log(response));
  }

  
  

  return (
    <>
    <Grid  container direction="column" rowSpacing={1} columnSpacing={{xs: 1,sm:2,md:3}} alignItems="center" justifyContent="center" >
      <Box    >
      <Card sx={{ minWidth: 300 }}>
        <main >
        <form  onSubmit={handleOnSubmit} >
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
                value={ordernumber}
                sx={{ minWidth: 300 }}
                onChange={(e) => setOrdernumber(e.target.value)} 
                />
               
              </FormControl>
              </Grid>
              <Grid item xs={6}>
              <Box sx={{ minWidth: 120 }}> 
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={product_id}
          label="Product"
          sx={{ minWidth: 300 }}
          onChange={(e) => setProduct(e.target.value)} 
        > 
          {/* mapping through  product in the  form system */}
        
          {products.map((item)=>

              <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
         )}  

         </Select>
      </FormControl> 
     </Box> 
              </Grid>
              <br />
              <Grid item xs={6}>
               <Box sx={{ minWidth: 120 }}> 
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={vendor_id}
          label="Vendor"
          sx={{ minWidth: 300 }}
          onChange={(e) => setVendor(e.target.value)} 
        > 
          {/* mapping of vendor form system */}


          {vendors.map((vendor)=>

<MenuItem value={vendor.id} key={vendor.id}>{vendor.name}</MenuItem>
)} 
         
         </Select>
      </FormControl> 
     </Box> 
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
              <FormHelperText id="my-helper-text">Amount in Ksh</FormHelperText>
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
      <Button variant='contained' onClick={handleOnSubmit}type="submit" style={{fontSize: 16 }}>
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