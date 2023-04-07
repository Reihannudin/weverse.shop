import './App.css';
import {Route, Routes} from "react-router-dom";
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
function App() {

  return(
      <div className="App">
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/shop/:id" element={<Shop  />}></Route>
              <Route path="/shop/:id/categories/:categories_id" element={<ShopCategory  />}></Route>
              <Route path="/shop/:id/product/:product_id/v/" element={<View />}></Route>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/order/history" element={<Order />}></Route>
              <Route path="/order/returnExchange/history" element={<Return />}></Route>
              <Route path="/support" element={<Support />}></Route>
              <Route path="/my/addresses" element={<Address />}></Route>
              <Route path="/notice" element={<Announcement />}></Route>
              <Route path="/events" element={<Events />}></Route>



              <Route path="/testing" element={<TabsRender />}></Route>

              {/*<Route path="/shop/:id/categories/:id/type/:id" element={<Shop  />}></Route>*/}
              {/*<Route path="/shop/:id/type/:id" element={<Shop  />}></Route>*/}

          </Routes>
      </div>
  )
}

export default App;
