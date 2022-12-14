import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from '@mui/material';
import {useState, useEffect} from "react";
import {Fragment} from "react";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function Main({stocks, invoices}) {
  const [items,
    setItems] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/purchaseitems").then((r) => r.json()).then((items) => {
      setItems(items)
    })
  }, [])

  return (
    <Fragment>
      <Container
        maxWidth="lg"
        sx={{
        mt: 4,
        mb: 4,
        ml: 35
      }}>
        HELLO USER
        <Grid container spacing={10}>
          {/* Chart */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              width: 350,
              backgroundColor: "#74A4BC"
            }}>
              <Typography
                sx={{
                fontSize: 40,
                color: "white"
              }}>Stock Items</Typography>
              <Typography>{stocks.length}
                stock items</Typography>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              width: 350,
              ml: 10,
              backgroundColor: "#B6D6CC"
            }}>
              <Typography
                sx={{
                fontSize: 40,
                color: "white"
              }}>Invoices</Typography>
              <Typography>{stocks.length}Invoices</Typography>

            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              width: 350,
              ml: 20,
              backgroundColor: "#FF3A20"
            }}>
              <Typography
                sx={{
                fontSize: 40,
                color: "white"
              }}>Purchase Items</Typography>
              <Typography 
              sx={{
                fontSize:20
              }}>{invoices.length}
                </Typography>

            </Paper>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Typography variant="h4" gutterBottom>
                    Purchase Items
                  </Typography>

                  <Table
                    sx={{
                    minWidth: 1000,
                    ml: 10
                  }}
                    aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell align="right">Vendor</StyledTableCell>
                        <StyledTableCell align="right">Invoice</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item) => (
                        <StyledTableRow key={item.id}>
                          <StyledTableCell component="th" scope="row">
                            {item.product.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{item.vendor.name}</StyledTableCell>
                          <StyledTableCell align="right">{item.invoice_id}</StyledTableCell>
                          <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                          <StyledTableCell align="right">
                            <Button variant="contained">Edit</Button>
                            <Button
                              variant="contained"
                              sx={{
                              backgroundColor: "red",
                              ml: 2
                            }}>Delete</Button>
                          </StyledTableCell>

                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>

                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Fragment>
  )

}
export default Main