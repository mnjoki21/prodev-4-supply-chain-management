import {Grid, Typography} from "@mui/material";
import {Container} from "@mui/system";
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Fragment, useEffect, useState} from "react";
import {TextField} from '@mui/material';
import {Button} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function PurchaseOrderForm({getOrders}) {

  // fetchproducts
  const [products,
    setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products").then((r) => r.json()).then((products) => {
      setProducts(products)
    })
  }, [])
  //fetch vendors
  const [vendors,
    setVendors] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/vendors").then((r) => r.json()).then((vendors) => {
      setVendors(vendors)
    })
  }, [])

  const [orders,
    setOrders] = useState({product_id: "", vendor_id: "", number: "", quantity: "", amount: ""})
  function onDataChange(e) {
    setOrders({
      ...orders,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const createdOrders = {
      product_id: orders.product_id,
      vendor_id: orders.vendor_id,
      number: orders.number,
      quantity: orders.quantity,
      amount: orders.amount
    };

    fetch("http://localhost:3000/purchaseorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createdOrders)
    }).then((res) => res.json()).then((newItem) => {
      getOrders(newItem);
      setOrders({
        ...orders,
        product_id: "",
        vendor_id: "",
        number: "",
        quantity: "",
        amount: ""
      });
    });

  }

  return (
    <Fragment>
      <Grid container spacing={10}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9} sx={{
          ml: 50
        }}>
          <Paper
            sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 450
          }}>
            <Typography variant="h4" gutterBottom>
              Create PurchaseOrders
            </Typography>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel >Product</InputLabel>
              <Select name="product_id" onChange={onDataChange}>
                {products.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel >Vendor</InputLabel>
              <Select name="vendor_id" onChange={onDataChange}>
                {vendors.map((vendor) => (
                  <MenuItem key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{
              m: 1,
              width: 500
            }}>
                <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              name="quantity"
              value={orders.quantity}
              onChange={onDataChange}
              sx={{
              width: 500,
              m: 1
            }}/>
              
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              name="amount"
              value={orders.amount}
              onChange={onDataChange}
              sx={{
              width: 500,
              m: 1
            }}/>
             <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              name="number"
              value={orders.number}
              onChange={onDataChange}
              sx={{
              width: 500,
              m: 1
            }}/>
            <Button
              variant="contained"
              type="submit"
              sx={{
              mt: 2
            }}
              onClick={handleSubmit}>Submit</Button>

          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  )

}
export default PurchaseOrderForm
