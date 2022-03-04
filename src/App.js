import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio"
import { Routes, Route } from "react-router-dom";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
