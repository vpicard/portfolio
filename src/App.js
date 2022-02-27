import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='' exact element={<Home/>} />
          <Route path='about' exact element={<About/>} />
          <Route path='contact' exact element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
