import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Pages/Home';
import Playagain from './Components/Pages/Playagain';

function App() {


  return (
    <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Playagain' element={<Playagain />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
