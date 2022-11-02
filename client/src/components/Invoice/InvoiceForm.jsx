import React, { useState, useEffect } from 'react'
import { Alert, Box, FormControl,Card, Button,FormHelperText, TextField, Grid, unstable_composeClasses } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



function InvoiceForm() {



   const [invoice,setInvoices]= useState([])

  const [purchaseorder, setPurchaseorder] = useState("");
  const [product, setProduct]=useState("")
  const [vendor, setVendor]=useState("")
  const [amount, setAmount] = useState();
  const [quantity, setQuantity]= useState("")
  const [accountname, setAccountname]= useState("")
  const [errors, setErrors] = useState([]);


  const [purchaseorders, setPurchaseorders]= useState([])
  const handleChangeOrder = (event) => {
    setPurchaseorder(event.target.value);
  };

  const [products, setProducts]= useState([])
  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
  };


  const [vendors, setVendors]= useState([])
  const handleChangeVendor = (event) => {
    setVendor(event.target.value);
  };



// fetches orders
  useEffect(() => {
    fetch("http://localhost:3000/purchaseorders")
      .then((r) => r.json())
      .then(data =>setPurchaseorders(data));
  }, []); 

// fetches products
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then(data =>setProducts(data));
  }, []); 

  // fetches vendors 
  useEffect(() => {
    fetch("http://localhost:3000/vendors")
      .then((r) => r.json())
      .then(data =>setVendors(data));
  }, []); 


  function handleOnSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/invoices",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({accountname, description ,product, vendor, purchaseorder}),
    })
    .then((r) => r.json())
    .then(response => setInvoices(response));
    // .then((response) => console.log(response));
  }


  return (
    <div>
        <Grid  container direction="row" alignItems="center" justifyContent="center" >
      <Box   alignItems="center"  >
      <Card sx={{ minWidth: 400 }}>
        <main >
        <form onSubmit={handleOnSubmit} >
          <p style={{fontWeight: "bolder", fontSize: 40 ,alignItems:"center", justifyContent:"center",textAlign:'center'}}>Invoice</p>
          
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '35ch' },}}>
          
            <div>
              
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Enter Product Name</FormHelperText> */}
                <TextField 
                type="text"
                variant="outlined"
                label="Enter Account Name"
                id="accountname"
                autoComplete="on"
                value={accountname}
                sx={{ minWidth: 400 }}
                onChange={(e) => setAccountname(e.target.value)} 
                />
               
              </FormControl>
              <br />
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Enter Product Description</FormHelperText> */}
                <TextField 
                type="number"
                variant="outlined"
                label="Enter Amount"
                id="amount"
                autoComplete="on"
                value={amount}
                sx={{ minWidth: 400 }}
                onChange={(e) => setAmount(e.target.value)} 
                />
               
              </FormControl>
              <br />
              <FormControl>
              {/* <FormHelperText id="my-helper-text">Enter Product Description</FormHelperText> */}
                <TextField 
                type="number"
                variant="outlined"
                label="Enter Quantity"
                id="quantity"
                autoComplete="on"
                value={quantity}
                sx={{ minWidth: 400 }}
                onChange={(e) => setQuantity(e.target.value)} 
                />
               
              </FormControl>
              <br />

              <FormControl >
        <InputLabel id="demo-simple-select-label">Purchase Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={purchaseorder}
          label="Purchase Order"           
          sx={{ minWidth: 400 ,m:1}}
          onChange={handleChangeOrder}
        >  
        {purchaseorders.map((item)=>

            <MenuItem value={item.id}  key={item.id} > {item.ordernumber}</MenuItem>
        )}
        </Select>
      </FormControl>
         <br />
         
         <FormControl >
        <InputLabel id="demo-simple-select-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          label="Product"
          sx={{ minWidth: 400, m:1 }}
          onChange={handleChangeProduct}
        >  
        {products.map((item)=>

           
            <MenuItem value={item.id}  key={item.id}>{item.name}</MenuItem>
        )}
        </Select>
      </FormControl>
      
      <Box textAlign="center"> 
      <FormControl >
        <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vendor}
          label="Vendor"
          sx={{ minWidth: 400 ,m:1}}
          onChange={handleChangeVendor}
        >  
        {vendors.map((item)=>

           
            <MenuItem value={item.id}  key={item.id}>{item.name}</MenuItem>
        )}
        </Select>
      </FormControl>
      <br />
              

     </Box> 
            </div>
          </Box>
          
          <br />
          
          <div>
            
            
                <Box textAlign='center'>
      <Button variant='contained'  type="submit" style={{fontSize: 16 }}>
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

export default InvoiceForm





