import {Link} from "react-router-dom";
import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

export default function Navbar() {
  return (
    <Box sx={{
      display: "flex"
    }}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
      }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
        variant="permanent"
        anchor="left">
        <Toolbar/>
        <Divider/>
        <List>
          <Link to={"/categories"}>Category</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/vendors"}>Vendors</Link>
          <Link to={"/purchaseorders"}>Purchase Orders</Link>

        </List>
        <Divider/>
        <List>
          <Link to={"/invoices"}>Invoice</Link>
          <Link to={"/purchaseitems"}>Purchase Items</Link>
          <Link to={"/stocks"}>Stock</Link>
          <Link to={"/users"}>Users</Link>
        </List>
        <Divider/>
      </Drawer>
      <Box
        component="main"
        sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3
      }}>
        <Toolbar/>

      </Box>
    </Box>
  );
}