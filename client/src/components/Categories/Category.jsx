import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import CategoriesForm from "./CategoriesForm";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Button} from "@mui/material";
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect} from "react"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function Category() {
  const [categories, setCategory] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:3000/categories')
    .then((r)=> r.json())
    .then((categories)=>{
      setCategory(categories)
      console.log(categories)
    })
  },[])
  return (
    
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <CategoriesForm/>
    <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
               
                  
      <Table sx={{ minWidth: 1000, ml:10 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" color="error">Delete</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained">Edit</Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  

                
              </Grid>
              </Grid>
    
    </Container>
  )
}