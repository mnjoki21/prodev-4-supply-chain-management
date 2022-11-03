import React from "react"
import ReactDOM from "react-dom";
import { Fragment } from "react"
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import Product from "./components/Products/Product"
import Vendor from "./components/Vendors/Vendor"
import PurchaseItem from "./components/PurchaseItems/PurchaseItem"
import Category from "./components/Categories/Category"
import PurcahseOrder from "./components/PurchaseOrders/PurchaseOrder"
import Invoice from "./components/Invoice/Invoice"
import Stock from "./components/Stock/Stock"
import User from "./components/Users/User"
import { useEffect, useState } from "react";
import Login from "./components/Register/Login";
import Main from "./components/Main";
import "./App.css"

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const [stocks,
    setStocks] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/stocks").then((r) => r.json()).then((stocks) => {
      setStocks(stocks)
    })
  }, [])

  const [invoices,
    setInvoices] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/invoices").then((r) => r.json()).then((invoices) => {
      setInvoices(invoices)
    })
  }, [])



  if (!user) return <Login onLogin={setUser} />;
  return (
      <div className="bg">
      <div className="routes-bg">
    <Fragment>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
      <Route exact path="/" element={< Main stocks={stocks} user={user} invoices={invoices}/>}/>
      <Route exact path="/categories" element={< Category />}/>
        <Route exact path="/vendors" element={< Vendor />}/>
        <Route exact path="/products" element={< Product />}/>
        <Route exact path="/purchaseitems" element={< PurchaseItem />}/>
        <Route exact path="/purchaseorders" element={<PurcahseOrder />}/>
        <Route exact path="/purchaseitems" element={< PurchaseItem />}/>
        <Route exact path="/invoices" element={< Invoice />}/>
        <Route exact path="/stocks" element={< Stock />}/>
        <Route exact path="/users" element={< User />}/>
      </Routes>
    </Fragment>
      </div>
    </div>
  )

}