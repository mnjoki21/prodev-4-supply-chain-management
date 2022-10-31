import React, { useState, useEffect } from 'react'
import { Alert, Box, FormControl,Card, Button,FormHelperText, TextField, Grid, unstable_composeClasses } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



function InvoiceForm() {





  const [purchaseorder, setPurchaseorder] = React.useState('');
  const [amount, setAmount] = useState([]);
  const [quantity, setQuantity]= useState("")
  const [accountname, setAccountname]= useState("")
  const [errors, setErrors] = useState([]);


    const [purchaseorders, setPurchaseorders]= useState([])


  const handleChange = (event) => {
    setPurchaseorder(event.target.value);
  };


// fetches categories
  useEffect(() => {
    fetch("http://localhost:3000/purchaseorders")
      .then((r) => r.json())
      .then(data =>setCategories(data));
  }, []); 



  function handleOnSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({accountname, description,category}),
    })
    .then((r) => r.json())
    .then(response => setProduct(response));
    // .then((response) => console.log(response));
  }


  return (
    <div>
        <Grid  container direction="row" alignItems="center" justifyContent="center" >
      <Box    >
      <Card sx={{ minWidth: 400 }}>
        <main >
        <form  >
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
          sx={{ minWidth: 400 }}
          onChange={handleChange}
        >  
        {purchaseorders.map((item)=>

           
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





