import './App.css';
import {Route, Routes, redirect, Navigate, useParams, Link} from "react-router-dom";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-free/css/all.css";
import Shop from "./pages/Shop";
import View from "./pages/View";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TabsRender from "./components/Tabs.Component.Test";
import ShopCategory from "./pages/ShopCategory";
import Address from "./pages/Address";
import Support from "./pages/Support";
import Return from "./pages/Return";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import {AnnouncementsCardComponent} from "./components/Card/AnnouncementsCard.Component";
import Announcement from "./pages/Announcement";
import Events from "./pages/Events";
import {useEffect, useState} from "react";
import {NavigationComponent} from "./components/Navigation.Component";
import Logout from "./pages/Logout";
import AddPassword from "./pages/AddPassword";
import AddInformation from "./pages/AddInformation";
import AddPasswordSignUp from "./pages/AddPasswordSignUp";
import {EditAddressComponent} from "./components/Card/EditAddress.Component";
import Checkout from "./pages/Checkout";
import Successfully from "./pages/Successfully";
import ViewOrder from "./pages/ViewOrder";

function App() {

    return(
      <div className="App">
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to='en/home' />}></Route>
                  <Route path="/:lang_id/home/" element={<Navigate to='/en/home/GL_USD' />}></Route>
                  <Route path="/:lang_id/home/:currency_id" element={<Home  />} default></Route>
                  <Route path="/:lang_id/shop/:currency_id/artist/:artist_id/categories" element={<Shop  />}></Route>
                  <Route path="/:lang_id/shop/:currency_id/artist/:artist_id/categories/:categories_id" element={<ShopCategory  />}></Route>
                  <Route path="/:lang_id/shop/:currency_id/artist/:artist_id/product/v/:product_id" element={<View />}></Route>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/signup" element={<SignUp />}/>
                  <Route path="/auth/add/password" element={<AddPassword />}/>
                  <Route path="/signup/add/password" element={<AddPasswordSignUp />}/>
                  <Route path="/signup/add/information/:email" element={<AddInformation />} />
                  <Route path="/logout" element={<Logout />}/>
                  <Route path="/login/redirect" element={<Login />} />
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/order/status/success" element={<Successfully />}></Route>
                  <Route path="/order/checkout/" element={<Checkout />}></Route>
                  <Route path="/order/history" element={<Order />}></Route>
                  <Route path="/order/history/v/:order_id" element={<ViewOrder />}></Route>
                  <Route path="/order/returnExchange/history" element={<Return />}></Route>
                  <Route path="/support" element={<Support />}></Route>
                  <Route path="/my/addresses" element={<Address />}></Route>
                  <Route path="/my/addresses/edit/:id" element={<EditAddressComponent />}></Route>
                  <Route path="/shop/:id/notice" element={<Announcement />}></Route>
                  <Route path="/shop/:id/events" element={<Events />}></Route>
                  <Route path="/testing" element={<TabsRender />}></Route>
              </Routes>
          </div>
      </div>
  )
}

export default App;
