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
import { Button } from '@mui/material';


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



function PurchaseItemForm() {

  // fetchproducts
  const[products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products").then((r) => r.json()).then((products) => {
      setProducts(products)
    })
  }, [])
//fetch vendors
  const[vendors, setVendors] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/vendors").then((r) => r.json()).then((vendors) => {
      setVendors(vendors)
    })
  }, [])
//fetch invoices
  const[invoices, setInvoices] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/invoices").then((r) => r.json()).then((invoices) => {
      setInvoices(invoices)
      console.log(invoices)
    })
  }, [])


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
              Create PurchaseItems
            </Typography>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel id="demo-simple-select-label" >Product</InputLabel>
              <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
              >
                {products.map((product) => (
                  <MenuItem>
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
              <Select >
                {vendors.map((vendor) => (
                  <MenuItem >
                    {vendor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel>Invoice Number</InputLabel>
              <Select
                input={< OutlinedInput label = "Name" />}
                >
                {invoices.map((invoice) => (
                  <MenuItem>
                    {invoice.id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Quantity" variant="outlined" sx={{width:500, m:1}}/>
            <Button variant="contained" type="submit" sx={{mt:2}}>Submit</Button>

          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  )

}
export default PurchaseItemForm


