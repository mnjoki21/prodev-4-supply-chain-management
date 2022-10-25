import {Link} from "react-router-dom";
import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Box} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ThreePIcon from '@mui/icons-material/ThreeP';

const drawerWidth = 120;

export default function Navbar() {
  return (
    <Box sx={{
      display: "flex"
    }}>
      <AppBar
        // position="fixed"
        sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: "blue",
        textAlign: "center",
        ml: `${drawerWidth}px`,
        justifyContent: "center"
      
      }}>
        <Toolbar >
          <Typography variant="h6"  component="div" sx={{textAlign: "center"}} >
            Supply Chains Made Easier!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
        width: 800,
        flexGrow: 1,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          color: "white",
          fontSize: 16,
          boxSizing: "border-box"
        }
      }}
        variant="permanent"
        anchor="left">
        <Toolbar/>
        <Divider/>
       
        <List>
          <Link style={{padding: 10, textAlign:"center" }}to={"/categories"}>Category</Link>
          <Divider/>
          <Link style={{padding: 10, textAlign:"center" }}to={"/products"}>Products</Link>
          <Divider/>
          <Link style={{padding: 10, textAlign:"center" }}to={"/vendors"}>Vendors</Link>
          <Divider/>
          <Link style={{padding: 10, textAlign:"center" }}to={"/purchaseorders"}>Purchase Orders</Link>

        </List>
        <Divider/>
        <List>
          <Link style={{padding: 10, textAlign:"center" }}to={"/invoices"}>Invoice</Link>
          <Divider/>
          <Link  style={{padding: 10, textAlign:"center" }} to={"/purchaseitems"}>Purchase Items</Link>
          <Divider/>
          <Link style={{padding: 10, textAlign:"center" }}to={"/stocks"}>Stock</Link>
          <Divider/>
          <Link style={{padding: 10, textAlign:"center" }} starticon={<ThreePIcon /> }to={"/users"}>Users</Link>
        </List>
        <Divider/>
      </Drawer>
      <Box
  
        sx={{
        flexGrow: 0,
        bgcolor: "background.default",
        p: 6
      }}>

      </Box>
    </Box>
  );
}
