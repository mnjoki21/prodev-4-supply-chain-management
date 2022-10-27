import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import CategoriesForm from "./CategoriesForm";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Category() {
  return (
    
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <CategoriesForm/>
    </Container>


  )
}