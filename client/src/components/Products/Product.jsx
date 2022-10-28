import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ProductsForm from "./ProductsForm";

function Products() {
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [products, setProducts] = useState([]);

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
      <ProductsForm />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1350 }} aria-label="customized table">
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
            { products.map((item) => {
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
    </>
  );
}

export default Products;
