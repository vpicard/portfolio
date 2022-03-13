import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route path='/portfolio' exact element={<Portfolio/>}/>
        </Routes>
    </div>
  );
}

export default App;
