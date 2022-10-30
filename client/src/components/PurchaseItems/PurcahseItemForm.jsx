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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium
  };
}

function PurchaseItemForm() {
  const theme = useTheme();
  const [personName,
    setPersonName] = useState([]);

  const handleChange = (event) => {
    const {target: {
        value
      }} = event;
    setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string'
      ? value.split(',')
      : value,);
  };

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
              <InputLabel id="demo-multiple-name-label">Product</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={< OutlinedInput label = "Name" />}
                MenuProps={MenuProps}>
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel id="demo-multiple-name-label">Vendor</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={< OutlinedInput label = "Name" />}
                MenuProps={MenuProps}>
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{
              m: 1,
              width: 500
            }}>
              <InputLabel id="demo-multiple-name-label">Invoice Number</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={< OutlinedInput label = "Name" />}
                MenuProps={MenuProps}>
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
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

