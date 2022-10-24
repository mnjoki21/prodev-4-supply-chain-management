import "./ProductsForm.css";
import TextField from "@mui/material/TextField";






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

