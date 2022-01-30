import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Settings from "./Pages/Settings";

function App() {
  return (
   <Router>
       
          <Header />
              <div className="container main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/recipes" element={<Recipes />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              
                </div>
                <Footer />
           
      </Router>
  );
}

export default App;
