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
import PurchaseOrderForm from "./PurchaseOrderForm";

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

export default function PurchaseOrder() {
  const [isAdding,
    setIsAdding] = useState(false);
  const [orders,
    setOrders] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/purchaseorders").then((r) => r.json()).then((orders) => {
      setOrders(orders)
    })
  }, [])

  function getOrders(newOrdersReceived) {
    const updateOrders = [
      ...orders,
      newOrdersReceived
    ];
    setOrders(updateOrders);
  }

  return (

    <Container maxWidth="lg" sx={{
      mt: 4,
      mb: 4
    }}>
      <Typography gutterBotto variant="h4" sx={{
        ml: 50
      }}>
        Purchase Orders
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Button
            variant="contained"
            type="submit"
            sx={{
            mb:4,
            ml: 6
          }}
            onClick={() => setIsAdding((isAdding) => !isAdding)}>Add PurchaseOrders</Button>

          {isAdding
            ? <PurchaseOrderForm getOrders={getOrders}/>
            : null}

          <Table
            sx={{
            minWidth: 1000,
            mt:10,
            ml: 10
          }}
            aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="right">Vendor</StyledTableCell>
                <StyledTableCell align="right">Number</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.product.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.vendor.name}</StyledTableCell>
                  <StyledTableCell align="right">{item.number}</StyledTableCell>
                  <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                  <StyledTableCell align="right">{item.amount}</StyledTableCell>
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
