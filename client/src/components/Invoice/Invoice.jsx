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
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from '@mui/material';
import {useState, useEffect} from "react";
import InvoiceForm from "./InvoiceForm";

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

export default function Invoice() {
  const [isAdding,
    setIsAdding] = useState(false);
  const [invoices,
    setInvoices] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/invoices").then((r) => r.json()).then((invoices) => {
      setInvoices(invoices)
    })
  }, [])

  function getOrders(newInvoices) {
    const updateItems = [...invoices, newInvoices];
    setInvoices(updateItems);
  }


  return (

    <Container maxWidth="lg" sx={{
      mt: 4,
      mb: 4
    }}>
       <Typography variant="h4"  sx={{ml:50}}gutterBottom>
        Invoices
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Button
            variant="contained"
            type="submit"
            sx={{
            mb:4,
            ml:6
          }}
            onClick={() => setIsAdding((isAdding) => !isAdding)}>Add Invoice</Button>

          {isAdding
            ? < InvoiceForm getOrders={getOrders}/>
            : null}

          <Table
            sx={{
            minWidth: 1000,
            ml: 10,
            mt: 15
          }}
            aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="right">PO Number</StyledTableCell>
                <StyledTableCell align="right">AccountName</StyledTableCell>
                 <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                   <StyledTableCell align="right">Vendor</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <StyledTableRow key={invoice.id}>
                   <StyledTableCell component="th" scope="row">
                    {invoice.product.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {invoice.purchaseorder.number}
                  </StyledTableCell>
                  <StyledTableCell align="right">{invoice.accountname}</StyledTableCell>
                  <StyledTableCell align="right">{invoice.quantity}</StyledTableCell>
                  <StyledTableCell align="right">{invoice.amount}</StyledTableCell>
                    <StyledTableCell align="right">{invoice.vendor.name}</StyledTableCell>
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

    </Container>
  )
}