import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductsForm from "./ProductsForm";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 30,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Product() {
  //  const [category, setCategory]= React.useState([])
  //  console.log(category)

  //  useEffect(() => {
  //   fetch("http://localhost:3000/categories")
  //     .then((r) => r.json())
  //     .then(data =>setCategory(data));
  // }, []);

  // function handleDelete(id) {
  //   console.log(id)
  //   fetch(`http://localhost:3000/categories/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       deleteEvent(id)
  //       // const deletion = category.filter((item) => item.id !== id);
  //       // setCategory(deletion);
  //     });
  // }

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setProducts(data);
      });
  }, []);

  function deleteProduct(id) {
    fetch(`http://localhost:3000/products/${id}`,
    {
      method: 'DELETE'
    }
    )
      .then((r) => r.json())
      .then((data) => {
        const goThru = data.filter(
          (dataItem) => dataItem.id !== id
        );
        console.log(goThru)
        setProducts(goThru)
    })
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <ProductsForm />

            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 1350, ml: 10 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Id</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Category id</StyledTableCell>
                    <StyledTableCell align="right">Threshold</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((item) => {
                    return (
                      <>
                        <StyledTableRow key={item.id}>
                          <StyledTableCell component="th" scope="row">
                            {item.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.description}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.threshold}
                          </StyledTableCell>

                          {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>  */}
                          {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                        </StyledTableRow>
                      
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}


        {/* {category.map((row) => 
        
        (
            <StyledTableRow key={row.id} >
              <StyledTableCell component="th" scope="row">
              {row.name}
              </StyledTableCell>
             <StyledTableCell align="right"><Button onClick={()=>handleDelete(row.id)} variant="contained" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
</StyledTableCell>
              
            </StyledTableRow>
          ))} */}