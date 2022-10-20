import {Fragment} from "react"
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

export default function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
      <Route exact path="/categories" element={< Category />}/>
        <Route exact path="/products" element={< Product />}/>
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
  )

}