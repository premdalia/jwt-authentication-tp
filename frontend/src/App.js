import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import NavbarTop from './components/NavbarTop';

function App() {
  return (

    <>
      {/* <Router> */}
        <NavbarTop />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App;
