import './App.css';
import {Route, Routes} from "react-router-dom";
import ArtistTest from "./pages/Artist-Test";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-free/css/all.css";
function App() {

  return(
      <div className="App">
          <Routes>
              <Route path="/" element={<Home />}></Route>
          </Routes>
      </div>
  )
}

export default App;
