import "./ProductsForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function ProductsForm() {
    const [drop, onDrop] = useState("");
  
    return (
      <div className="products_form">
        <Paper className="card" elevation={2}>
          <div style={{ width: "90%" }}>
            <h2 style={{ textAlign: "left" }}>Add Item</h2>
          </div>
          <TextField
          className="textField"
          id="name"
          label="Name"
          variant="outlined"
        />

        <TextField
          className="textField"
          id="description"
          label="Description"
          variant="outlined"
        />

        <TextField
          className="textField"
          id="sku"
          label="SKU"
          variant="outlined"
        />

        <FormControl style={{ width: "90%" }}>
          <InputLabel id="demo-simple-select-label">Drop</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={drop}
            label="Age"
            onChange={(e) => onDrop(e.target.value)}
          >
            <MenuItem value={10}>Drop1</MenuItem>
            <MenuItem value={20}>Drop2</MenuItem>
            <MenuItem value={30}>Drop3</MenuItem>
          </Select>
        </FormControl>


        <Button className="addBtn" variant="contained"style={{backgroundColor: "#29339b"}} >
          ADD TO LIST
        </Button>
      </Paper>
    </div>
  );
}

export default ProductsForm;





