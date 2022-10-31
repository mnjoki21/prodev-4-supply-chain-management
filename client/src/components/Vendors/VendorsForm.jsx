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



function VendorsForm() {

  // fetchproducts
  const[name, setName] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/name").then((r) => r.json()).then((name) => {
      setName(name)
    })
  }, [])
//fetch vendors
  const[email, setEmail] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/email").then((r) => r.json()).then((email) => {
      setEmail(email)
    })
  }, [])
//fetch invoices
  const[address, setAddress] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/address").then((r) => r.json()).then((address) => {
      setAddress(address)
      console.log(address)
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
              Vendors Form
            </Typography>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel id="demo-simple-select-label" >Name</InputLabel>
              <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
              >
                {name.map((name) => (
                  <MenuItem>
                    {name.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel >Email</InputLabel>
              <Select >
                {email.map((email) => (
                  <MenuItem >
                    {email.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel>Address</InputLabel>
              <Select
                input={< OutlinedInput label = "Address" />}
                >
                {address.map((address) => (
                  <MenuItem>
                    {address.id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel>Phone Number</InputLabel>
              <Select
                input={< OutlinedInput label = "Phone Number" />}
                >
                {address.map((phone_number) => (
                  <MenuItem>
                    {phone_number.id}
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
export default VendorsForm


