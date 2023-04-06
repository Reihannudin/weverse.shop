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


              <Route path="/testing" element={<TabsRender />}></Route>

              {/*<Route path="/shop/:id/categories/:id/type/:id" element={<Shop  />}></Route>*/}
              {/*<Route path="/shop/:id/type/:id" element={<Shop  />}></Route>*/}

          </Routes>
      </div>
  )
}

export default App;
